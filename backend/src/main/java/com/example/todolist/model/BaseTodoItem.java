package com.example.todolist.model;

public class BaseTodoItem {

    private String description;
    private Boolean isCompleted;

    public BaseTodoItem() {}

    public BaseTodoItem(String description, Boolean isCompleted) {
        this.description = description;
        this.isCompleted = isCompleted;
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
