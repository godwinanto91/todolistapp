package com.example.todolist.service;

import com.example.todolist.model.BaseTodoItem;
import com.example.todolist.model.TodoItem;
import com.example.todolist.repository.TodoItemRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@Import(TodoItemService.class) // Import service manually as it's not a component in slice test
public class TodoItemServiceTest {

    @Autowired
    private TodoItemService service;

    @Autowired
    private TodoItemRepository repository;

    @BeforeEach
    void clearDatabase() {
        repository.deleteAll();
    }

    @Test
    void testCreateAndFindAll() {
        BaseTodoItem base = new BaseTodoItem("Learn Spring Boot", false);
        TodoItem item = service.create(base);

        List<TodoItem> all = service.findAll();
        assertEquals(1, all.size());
        assertEquals("Learn Spring Boot", all.get(0).getDescription());
    }

    @Test
    void testDescriptionExists() {
        service.create(new BaseTodoItem("Test Task", false));
        assertTrue(service.descriptionExists("Test Task"));
        assertFalse(service.descriptionExists("Unknown Task"));
    }

    @Test
    void testUpdateItem() {
        TodoItem created = service.create(new BaseTodoItem("Update Me", false));
        TodoItem updated = service.update(created.getId(), new BaseTodoItem("Updated", true));

        assertNotNull(updated);
        assertEquals("Updated", updated.getDescription());
        assertTrue(updated.getIsCompleted());
    }

    @Test
    void testRemoveItem() {
        TodoItem item = service.create(new BaseTodoItem("To be deleted", false));
        boolean result = service.remove(item.getId());
        assertTrue(result);

        assertEquals(0, service.findAll().size());
    }

    @Test
    void testUpdateNonExistentItem() {
        TodoItem result = service.update("invalid_id", new BaseTodoItem("Nothing", false));
        assertNull(result);
    }
}
