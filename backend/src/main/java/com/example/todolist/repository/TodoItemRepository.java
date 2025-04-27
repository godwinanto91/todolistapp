package com.example.todolist.repository;

import com.example.todolist.model.TodoItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TodoItemRepository extends JpaRepository<TodoItem, String> {
    Optional<TodoItem> findByDescription(String description);
}
