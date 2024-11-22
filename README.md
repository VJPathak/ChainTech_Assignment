# ChainTech_Assignment: To-Do List Application

## **Overview**
A simple and efficient To-Do List application built using Node.js, Express, and MongoDB. This application allows users to create, view, update, delete, and manage tasks with additional features like due dates and task categories.

---

## **Features**
- Create tasks with title, description, due date, and category.
- View a list of all tasks.
- Update task details.
- Mark tasks as completed.
- Delete tasks.
- Input validation and error handling.
- MongoDB integration for data persistence.

---

## API Endpoints

Below is a list of all the available API methods, their endpoints, and descriptions:

| Method | Endpoint                | Description                           |
|--------|-------------------------|---------------------------------------|
| POST   | `/tasks`                | Create a new task.                   |
| GET    | `/tasks`                | Retrieve all tasks.                  |
| GET    | `/tasks/:id`            | Retrieve a specific task.            |
| PUT    | `/tasks/:id`            | Update a task.                       |
| DELETE | `/tasks/:id`            | Delete a task.                       |
| PATCH  | `/tasks/:id/complete`   | Mark a task as completed.            |

## Setup Instructions

### Prerequisites
- Node.js installed on your machine.
- MongoDB setup (either locally or using a cloud service like MongoDB Atlas).

## Setup an .env file containing
MONGO_URI=mongodb+srv://vjpmongodb:vjpmongodb@cluster0.pakwt.mongodb.net/todo?retryWrites=true&w=majority
PORT=3000

### YOU ARE GOOD TO GO



