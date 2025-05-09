# Todo List Application

This Todo List application allows users to manage their tasks. Users can add new tasks, mark tasks as completed, and delete tasks. The application interacts with a backend API to perform these operations.

## Features

- Add new tasks
- Mark tasks as completed
- Display all tasks
- Refresh the task
- Display success and error messages
- Delete tasks
- Display spinner on API call
- **Unit test cases-Total of 28**
    ### Unit test case coverage - React Frontend
    Test Suites: 8 passed, 8 total
    Tests:       28 passed, 28 total
    Snapshots:   0 total
    ### Unit test case coverage - Java Backend
    Tests:       10 passed, 10 total

## Technologies Used
### Frontend

- **React**: Frontend framework for building user interfaces.
- **React Bootstrap**: UI components styled with Bootstrap.
- **Axios**: For making HTTP requests to the backend.
- **dotenv**: Module to load environment variables from a .env file.
- **Jest & Testing Library**: Unit testing and DOM testing utilities for React.

### Backend

- **Java 17**: Core language used for backend logic.
- **Spring Boot**: Backend framework for building RESTful APIs.
- **Spring Data JPA**: For interacting with databases using repositories.
- **H2 Database**: In-memory or file-based database for local development and testing.
- **JUnit 5**: Unit testing framework used for backend tests.
- **MockMvc**: Used for writing controller-level integration tests in Spring.
- **ObjectMapper (Jackson)**: For JSON serialization/deserialization in tests.

## Repository Structure

```
todolistapp/
├── frontend/                         # React App
│   ├── src/
│   │   ├── components/
│   │   │   ├── alert/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── index.test.jsx
│   │   │   │   ├── styles.css
│   │   │   ├── button/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── index.test.jsx
│   │   │   │   ├── styles.css
│   │   │   ├── formField/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── index.test.jsx
│   │   │   │   ├── styles.css
│   │   │   ├── spinner/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── index.test.jsx
│   │   │   │   ├── styles.css
│   │   │   ├── table/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── index.test.jsx
│   │   │   │   ├── styles.css
│   │   │   ├── title/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── index.test.jsx
│   │   │   │   ├── styles.css
│   │   ├── enum/
│   │   │   ├── message.enum.js
│   │   │   ├── urlpath.enum.js
│   │   ├── feature/
│   │   │   ├── addToDo/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── index.test.jsx
│   │   │   ├── toDoItems/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── index.test.jsx
│   │   ├── layout/
│   │   │   ├── body/
│   │   │   │   ├── index.jsx
│   │   │   ├── footer/
│   │   │   │   ├── index.jsx
│   │   │   ├── header/
│   │   │   │   ├── index.jsx
│   │   │   ├── index.jsx
│   │   ├── pages/
│   │   │   ├── toDoList/
│   │   │   │   ├── index.jsx
│   │   ├── utils/
│   │   │   ├── axios.helper.js
│   │   │   ├── message.helper.js
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── App.css
│   │   ├── index.js
│   ├── public/
│   │   ├── index.html
│   ├── .env
│   ├── package.json

├── backend/                          # Spring Boot App
│   ├── build.gradle
│   ├── settings.gradle
│   └── src/
│       ├── main/
│       │   ├── java/com/example/todolist/
│       │   │   ├── controller/
│       │   │   │   └── TodoItemController.java
│       │   │   ├── model/
│       │   │   │   ├── BaseTodoItem.java
│       │   │   │   └── TodoItem.java
│       │   │   ├── service/
│       │   │   │   └── TodoItemService.java
│       │   │   ├── repository/
│       │   │   │   └── TodoItemRepository.java
│       │   │   └── TodoListApplication.java
│       │   └── resources/
│       │       └── application.yml
│       └── test/
│           └── java/com/example/todolist/
│               ├── service/
│               │   └── TodoItemServiceTest.java
│               └── controller/
│                   └── TodoItemControllerTest.java

```

## Backend API - Start the backend app before Frontend app

### Open terminal and navigate to the frontend folder:

```sh
cd <project_directory>
cd backend
```

### Start the application:

```sh
./gradlew build
```

```sh
./gradlew bootRun
```
### Running Unit Tests

```sh
./gradlew test
```

### API will be available at:
http://localhost:8080/api/todoItems

The frontend interacts with a backend API to manage tasks. The API endpoints are as follows:

- **POST /todoItems**: Add a new task.
- **GET /todoItems**: Get all tasks.
- **PUT /todoItems/:id**: Update a task (mark as completed).
- **DELETE /todoItems/:id**: Delete a task.

## Frontend (React)

1. **_components_** : This directory contains all application components.
2. **_enum_** : This directory contains all enums
3. **_feature_** : This directory contains list of the feature(current + deliverd)
4. **_layouts_** : This directory contains list of the feature,tabs,page layouts
5. **_pages_** : This directory contains list of the pages
8. **_utils_** : This directory contains all common usefull functions.

## Installation

### Clone the repository:
git clone <[repository_url](https://github.com/godwinanto91/todoList.git)>

### Open terminal and navigate to the frontend folder:

```sh
cd <project_directory>

cd frontend
```

### Install dependencies:
```sh
npm i
```
### Start the application:

```sh
npm start
```
### Running Unit Tests

```sh
npm test
```

## Usage

- Access the application at `http://localhost:3000`.
- Add new task by entering a description and clicking "Add Item".
- Mark task as completed by clicking the "Mark as completed" button.
- Delete task(s) by clicking the "Remove" button.
- Refresh task(s) by clicking on "Refresh" button

## Contributors

- [Godwin Anto](https://github.com/godwinanto91/)
