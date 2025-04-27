package com.example.todolist.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TodoItem {

    @Id
    private String id;

    private String description;
    private Boolean isCompleted;

    public TodoItem() {}

    public TodoItem(String id, String description, Boolean isCompleted) {
        this.id = id;
        this.description = description;
        this.isCompleted = isCompleted;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getIsCompleted() {
        return isCompleted;
    }

    public void setIsCompleted(Boolean isCompleted) {
        this.isCompleted = isCompleted;
    }
}
