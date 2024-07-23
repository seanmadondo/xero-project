# Xero Balance Sheet Report

## Overview

A one-page application to display the Balance Sheet Report from Xero. It includes a React Typescript frontend and a Node backend, with Docker for containerization.

## Setup Guide

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/seanmadondo/xero-project.git
   cd xero-project
   ```
2. **Run the containers**
   In the root of the folder:

   - Run:

   ```bash
   docker-compose up --build
   ```

   - xero-api is running at localhost:3000
   - backend is running at localhost:3001
   - frontend is running at localhost:3002

## Design Decisions

### Frontend

- **Framework:** React with TypeScript for strong typing and maintainability.
- **Componentization:** Divided into reusable components like `Report` and `Table`.
- **Encapsulation:** Logic encapsulated using the custom hook `useReport` for single access and control of reporting.
- **State Management:** App doesn't require complex state management - handled with React hooks (`useState`, `useEffect`).
- **Testing:** Unit tests with Jest and React Testing Library.

### Backend

- **Framework:** Express.js for handling HTTP requests.
- **API Endpoint:** `/api/balance-sheet` to fetch data from the mock Xero API.
- **Error Handling:** Comprehensive to ensure robustness.
- **Testing:** Unit tests with Jest.

## Testing

### Frontend

- **Testing Framework:** Jest and React Testing Library.
- **Run Tests:**
  ```bash
  cd xero-frontend
  npm test
  ```

### Backend

- **Tests Location:** `backend/src/__tests__` directory.
- **Testing Framework:** Jest and React Testing Library.
- **Run Tests:**
  ```bash
  cd backend
  npm test
  ```

---
