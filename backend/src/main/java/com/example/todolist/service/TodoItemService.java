package com.example.todolist.service;

import org.springframework.beans.factory.annotation.Autowired;
import com.example.todolist.model.BaseTodoItem;
import com.example.todolist.model.TodoItem;
import com.example.todolist.repository.TodoItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TodoItemService {

    @Autowired
    private TodoItemRepository repository;

    public List<TodoItem> findAll() {
        return repository.findAll();
    }

    public TodoItem find(String id) {
        return repository.findById(id).orElse(null);
    }

    public boolean descriptionExists(String description) {
        return repository.findByDescription(description).isPresent();
    }

    public TodoItem create(BaseTodoItem base) {
        String id = UUID.randomUUID().toString().substring(0, 10);
        TodoItem item = new TodoItem(id, base.getDescription(), base.getIsCompleted());
        return repository.save(item);
    }

    public TodoItem update(String id, BaseTodoItem update) {
        if (!repository.existsById(id)) return null;
        TodoItem item = new TodoItem(id, update.getDescription(), update.getIsCompleted());
        return repository.save(item);
    }

    public boolean remove(String id) {
        if (!repository.existsById(id)) return false;
        repository.deleteById(id);
        return true;
    }
}
