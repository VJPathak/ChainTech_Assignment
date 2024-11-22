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

<h1>API Endpoints</h1>

    <table>
        <thead>
            <tr>
                <th>Method</th>
                <th>Endpoint</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>POST</td>
                <td>/tasks</td>
                <td>Create a new task.</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/tasks</td>
                <td>Retrieve all tasks.</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/tasks/:id</td>
                <td>Retrieve a specific task.</td>
            </tr>
            <tr>
                <td>PUT</td>
                <td>/tasks/:id</td>
                <td>Update a task.</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td>/tasks/:id</td>
                <td>Delete a task.</td>
            </tr>
            <tr>
                <td>PATCH</td>
                <td>/tasks/:id/complete</td>
                <td>Mark a task as completed.</td>
            </tr>
        </tbody>
    </table>
