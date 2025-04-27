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
- **Unit test cases-Total of 29**
    ### Unit test case coverage
    Test Suites: 9 passed, 9 total
    Tests:       29 passed, 29 total
    Snapshots:   0 total

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **React Bootstrap**: Library for UI components.
- **Axios**: Library for making HTTP requests.
- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **dotenv**: Module to load environment variables from a .env file.
- **Jest**: Jest test framework for unit testing.

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
cd <project_directory>
cd frontend

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
$ npm test
```

## Usage

- Access the application at `http://localhost:3000`.
- Add new task by entering a description and clicking "Add Item".
- Mark task as completed by clicking the "Mark as completed" button.
- Delete task(s) by clicking the "Remove" button.
- Refresh task(s) by clicking on "Refresh" button

## Backend API

### Open terminal and navigate to the frontend folder:
cd <project_directory>
cd backend

### Start the application:

```sh
./gradlew build
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

## Contributors

- [Godwin Anto](https://github.com/godwinanto91/)