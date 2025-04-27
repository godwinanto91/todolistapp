package com.example.todolist.controller;

import com.example.todolist.model.BaseTodoItem;
import com.example.todolist.model.TodoItem;
import com.example.todolist.service.TodoItemService;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.UUID;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@WebMvcTest(TodoItemController.class)
public class TodoItemControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TodoItemService service;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testGetAll() throws Exception {
        when(service.findAll()).thenReturn(List.of(new TodoItem("1", "Test", false)));

        mockMvc.perform(get("/api/todoItems"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$[0].description").value("Test"));
    }

    @Test
    void testCreateValid() throws Exception {
        BaseTodoItem request = new BaseTodoItem("New Task", false);
        TodoItem response = new TodoItem("abc123", "New Task", false);

        when(service.descriptionExists("New Task")).thenReturn(false);
        when(service.create(any())).thenReturn(response);

        mockMvc.perform(post("/api/todoItems")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
               .andExpect(status().isCreated())
               .andExpect(jsonPath("$.id").value("abc123"));
    }

    @Test
    void testCreateDuplicate() throws Exception {
        BaseTodoItem request = new BaseTodoItem("Duplicate", false);

        when(service.descriptionExists("Duplicate")).thenReturn(true);

        mockMvc.perform(post("/api/todoItems")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
               .andExpect(status().isBadRequest());
    }

    @Test
    void testUpdateExisting() throws Exception {
        BaseTodoItem update = new BaseTodoItem("Updated Desc", true);
        TodoItem updated = new TodoItem("123", "Updated Desc", true);

        when(service.update(eq("123"), any())).thenReturn(updated);

        mockMvc.perform(put("/api/todoItems/123")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(update)))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.description").value("Updated Desc"));
    }

    @Test
    void testDeleteItem() throws Exception {
        when(service.remove("123")).thenReturn(true);

        mockMvc.perform(delete("/api/todoItems/123"))
               .andExpect(status().isNoContent());
    }
}
