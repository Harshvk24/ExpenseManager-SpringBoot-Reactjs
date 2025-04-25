
# Expense Tracker

An **Expense Tracker** application that allows users to manage their personal finances by tracking income and expenses. This project is built with **Spring Boot** for the backend and **React** for the frontend.

## Project Structure

```
expense-tracker/
│
├── expense-tracker/          # Backend (Spring Boot) - Java
│   ├── src/                  # Source code for backend
│   ├── target/               # Compiled files for backend
│   └── application.properties # Backend configuration file
│
└── expense-tracker-frontend/ # Frontend (React) - JavaScript
    ├── node_modules/         # Dependencies for React
    ├── public/               # Public assets (e.g., index.html)
    ├── src/                  # React components and source code
    └── package.json          # Frontend dependencies and scripts
```

## Technologies Used

### Backend (Spring Boot):
- Java 11 or higher
- Spring Boot
- Spring Data JPA
- H2 Database (for local development)

### Frontend (React):
- React.js
- JavaScript (ES6+)
- HTML/CSS
- Axios (for API requests)

## Features

- **Expense Management**: Add, update, and delete expenses.
- **Income Management**: Add, update, and delete income sources.
- **Expense Summary**: View the total expenses for the month.
- **Interactive UI**: A responsive user interface built using React.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Java 11 or higher](https://openjdk.java.net/)
- [Node.js and npm](https://nodejs.org/)
- [Git](https://git-scm.com/)

## Setup and Installation

### Backend (Spring Boot)

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/expense-tracker.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd expense-tracker/expense-tracker
    ```

3. Build the backend project using Maven or Gradle (depending on your setup):

    - If using **Maven**:

      ```bash
      mvn clean install
      ```

    - If using **Gradle**:

      ```bash
      gradle build
      ```

4. Run the Spring Boot application:

    ```bash
    mvn spring-boot:run
    ```

    - By default, the backend will run on `http://localhost:8080`.

### Frontend (React)

1. Navigate to the frontend directory:

    ```bash
    cd expense-tracker-frontend
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

    - By default, the frontend will run on `http://localhost:3000`.

### API Integration

The frontend communicates with the backend API for managing expenses and income. Ensure the backend is running before using the frontend. The default API endpoint for managing expenses is `http://localhost:8080/api/expenses`.

### Environment Variables

For local development, you can configure your environment variables in the `.env` file in the root of your frontend project. Make sure to set the correct API base URL:

```env
REACT_APP_API_BASE_URL=http://localhost:8080/api
```

## Testing

### Backend

1. Unit tests are located in the `src/test/java` folder.
2. Run the tests using your preferred build tool (Maven or Gradle).

   - With Maven:

     ```bash
     mvn test
     ```

   - With Gradle:

     ```bash
     gradle test
     ```

### Frontend

1. The frontend comes with pre-configured Jest testing.
2. Run the frontend tests:

   ```bash
   npm test
   ```

## Contributing

1. Fork this repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.



