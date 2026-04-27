# Card Validator API

A lightweight, high-performance REST API built with **Node.js**, **TypeScript**, and **Express.js** to validate credit card numbers using the **Luhn Algorithm**. Built for the Tobams Group Backend Intern Assessment.

## Live Demo
**Base URL:** `https://card-validator-api.onrender.com`

**Test the Endpoint:**
Send a `POST` request to `/api/v1/card/validate` with a JSON body: 
```json
{ "cardNumber": "49927398716" }
```
## ✨ Features
- **Validation Engine:** Implements the mathematically rigorous Luhn (Mod 10) algorithm.
- **Strict Typing:** Developed with TypeScript's `strict: true` for maximum runtime safety and predictability.
- **Layered Architecture:** Clean separation of concerns between Routes, Controllers, and Services.
- **Robust Error Handling:** Gracefully handles missing fields, incorrect data types, malformed JSON, and unexpected server errors.
- **Input Sanitization:** Automatically strips spaces and dashes to accommodate various real-world card input formats.

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Language:** TypeScript
- **Framework:** Express.js
- **Testing:** Jest & ts-jest
- **Deployment:** Render

## 📦 Installation & Setup

Clone the repository:
```bash
git clone https://github.com/DevGloriaa/card-validator-api.git
cd card-validator-api
```
Install dependencies:

```bash
npm install
```
Compile TypeScript into JavaScript:

```bash
npm run build
```
🏃 Running the Application
Development Mode (with Nodemon auto-reload):

```bash
npm run dev
```
Production Mode (runs the compiled /dist output):

```bash
npm start
```
🧪 Running Tests
The application includes a comprehensive Jest unit testing suite targeting the core mathematical logic and edge cases.

```bash
npm test
```
## 🛣️ API Documentation
1. Health Check
Endpoint: /health

Method: GET

Description: Verifies the API is active and reachable.

Response: 200 OK

JSON
{ "status": "API is running smoothly" }
2. Validate Card Number
Endpoint: /api/v1/card/validate

Method: POST

Headers: Content-Type: application/json

Request Body:

JSON
{
  "cardNumber": "49927398716"
}
Success Response (200 OK):

JSON
{
  "success": true,
  "data": {
    "isValid": true
  }
}
Error Response Example (400 Bad Request):

JSON
{
  "success": false,
  "error": "Missing required field: cardNumber"
}

## 🧠 Design & Architectural Decisions
**Framework Choice (Express.js)**: I selected Express.js over highly opinionated frameworks like NestJS to demonstrate manual architectural design, dependency management, and an understanding of foundational backend routing.

**Layered Pattern (Controller/Service)**: The HTTP logic (req/res, status codes) is strictly isolated in the Controller layer, while the core Luhn algorithm is abstracted into a Service layer. This ensures the business logic is framework-agnostic and highly testable.

**Strict Null Checking**: Utilizing TypeScript's strict mode required defensive programming techniques (like using the Nullish Coalescing operator ?? during string indexing) to prevent potential undefined crashes, resulting in a more resilient application.

**Production-Ready Build Strategy**: Configured the TypeScript compiler to mirror the project directory structure into the dist folder, allowing for seamless cloud deployment while preserving a clean local development experience.
