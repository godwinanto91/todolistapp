import React from 'react';
import './styles.css';

export const Header = () => {
  return (
    <div className="custom-header-bg">
      <div className="header-center-text">
        <h2 className="header-title">Todo List App</h2>
        <p className="header-subtitle">
          Welcome! This app helps you manage your daily tasks easily and efficiently.
        </p>
      </div>

      <div className="header-instructions">
        <p><strong>Here's what you can do:</strong></p>
        <ol>
          <li><strong>Add a task</strong>: Use the input form to create a new Todo item.</li>
          <li><strong>View all tasks</strong>: All your tasks will be displayed below in a list format.</li>
          <li><strong>Mark tasks as completed</strong>: Click the "Mark as completed" button to update the status of your task.</li>
          <li><strong>Stay organized</strong>: Tasks are saved and managed via our backend so you can always come back and check your list.</li>
        </ol>
        <p className="header-callout">
          Start adding your tasks and keep track of everything in one place!
        </p>
      </div>
    </div>
  );
};