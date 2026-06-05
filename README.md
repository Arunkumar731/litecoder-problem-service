# LiteCoder Problem Service

A backend microservice for managing coding problems in the LiteCoder platform. This service is responsible for creating, storing, retrieving, updating, and deleting programming problems along with their test cases, difficulty levels, tags, editorials, and constraints.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Winston Logger
* dotenv
* body-parser

---

## Project Structure

```text
src/
│
├── config/
│   ├── db.config.js
│   ├── logger.config.js
│   └── server.config.js
│
├── controllers/
│   ├── problem.controller.js
│   └── index.js
│
├── repositories/
│   ├── problem.repository.js
│   └── index.js
│
├── services/
│   ├── problem.service.js
│   └── index.js
│
├── routes/
│   ├── index.js
│   └── v1/
│       ├── index.js
│       └── problems.routes.js
│
├── models/
│   ├── problem.model.js
│   └── index.js
│
├── utils/
│   ├── markdownSanitizer.js
│   └── errorHandler.js
│
└── index.js
```

---

## Architecture

The project follows a layered architecture:

```text
Client Request
      │
      ▼
Routes
      │
      ▼
Controllers
      │
      ▼
Services
      │
      ▼
Repositories
      │
      ▼
MongoDB
```

### Responsibilities

#### Routes

* Define API endpoints.
* Forward requests to controllers.

#### Controllers

* Receive requests.
* Validate request flow.
* Send responses.

#### Services

* Business logic layer.
* Data sanitization.
* Process request data.

#### Repositories

* Direct interaction with MongoDB.
* CRUD operations.

#### Models

* Define MongoDB schemas.

---

## Request Flow

Example:

```text
/api/v1/problems/ping
```

Routing flow:

```text
/api
   │
   ▼
api_router
   │
   ▼
/v1
   │
   ▼
v1_router
   │
   ▼
/problems
   │
   ▼
problem_router
   │
   ▼
problemController
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000

MONGO_DB_URL=<your_mongodb_connection_string>

LOG_DB_URL=<your_logger_database_connection_string>
```

---

## Installation

Clone the repository:

```bash
git clone <https://github.com/Arunkumar731/litecoder-problem-service.git>
```

Move into the project:

```bash
cd litecoder-problem-service
```

Install dependencies:

```bash
npm install
```

---

## Running the Project

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

## Available APIs

### Health Check

```http
GET /ping
```

Response:

```json
{
  "message": "problem service has arrived"
}
```

---

### Problem Controller Ping

```http
GET /api/v1/problems/ping
```

Response:

```json
{
  "message": "problem controller is up"
}
```

---

### Create Problem

```http
POST /api/v1/problems
```

Sample Request Body:

```json
{
  "title": "Two Sum",
  "description": "Find indices of two numbers whose sum equals target.",
  "difficulty": "easy",
  "tags": ["array", "hashmap"],
  "testCases": [
    {
      "input": "2 7 11 15",
      "output": "0 1"
    }
  ],
  "editorial": "Use HashMap",
  "constrains": "1 <= n <= 100000",
  "hints": "Think about complements"
}
```

---

## Logging

The project uses Winston for:

* Console logging
* File logging
* MongoDB logging

Log levels:

```text
info
warn
error
debug
```

---

## Markdown Sanitization

Problem descriptions are sanitized before storing in the database.

Pipeline:

```text
Markdown
   │
   ▼
HTML Conversion
   │
   ▼
HTML Sanitization
   │
   ▼
Markdown Conversion
   │
   ▼
Safe Markdown
```

This prevents malicious scripts from being stored in the database.

---

## Future Features

* User authentication
* Code execution service integration
* Problem submissions
* Contest support
* Editorial management
* Test case management
* Role-based authorization
* API documentation using Swagger

---

## Author

Arun Kumar 

