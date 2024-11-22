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

## **Installation**

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>

Install dependencies:

npm install

API Endpoints: Task Routes

**Method	    Endpoint	             Description**
1) POST	      /tasks	               Create a new task.
2) GET	      /tasks	               Retrieve all tasks.
3) GET	      /tasks/:id	           Retrieve a specific task.
4) PUT	      /tasks/:id	           Update a task.
5) DELETE	    /tasks/:id	           Delete a task.
6) PATCH	    /tasks/:id/complete	   Mark a task as completed.
