package com.example.todolist.controller;

import com.example.todolist.model.BaseTodoItem;
import com.example.todolist.model.TodoItem;
import com.example.todolist.service.TodoItemService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todoItems")
@CrossOrigin
public class TodoItemController {

    private final TodoItemService service;

    public TodoItemController(TodoItemService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<TodoItem>> getAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable String id) {
        TodoItem item = service.find(id);
        return item != null ? ResponseEntity.ok(item) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody BaseTodoItem item) {
        if (item.getDescription() == null || item.getDescription().isEmpty()) {
            return ResponseEntity.badRequest().body("Description is required");
        }
        if (service.descriptionExists(item.getDescription())) {
            return ResponseEntity.badRequest().body("Description already exists");
        }
        return ResponseEntity.status(201).body(service.create(item));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable String id, @RequestBody BaseTodoItem item) {
        TodoItem updated = service.update(id, item);
        return updated != null ? ResponseEntity.ok(updated) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        return service.remove(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
