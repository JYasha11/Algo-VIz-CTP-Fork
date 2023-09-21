# AlgoViz

AlgoViz is a web application developed by a team of two dedicated individuals. This project combines the power of a RESTful API built with Express.js and PostgreSQL with a user-friendly front-end created using React, HTML/CSS, and Material UI. The goal of this application is to provide users with a platform to track their progress in solving LeetCode problems, access organized problem sets by topic and difficulty, and learn through interactive visualizations of sorting algorithms.

In its current state, the application is functional, but there's room for improvement and additional features, particularly in the areas of additional visualizations and more detailed question list.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)

## Features

AlgoViz offers a range of features to help users enhance their coding skills and track their progress effectively:

1. **LeetCode Problem Organizer**: Users can access a well-organized collection of LeetCode problems based on topics and difficulty levels. This makes it easy to find specific problems for practice.

2. **Progress Tracking**: Users can track their progress in solving LeetCode problems. Mark problems as solved, and the application will keep a record of your accomplishments.

3. **Interactive Visualizations**: The application provides interactive visualizations of various sorting algorithms. These visual aids help learners understand sorting algorithms through hands-on experience.

## Getting Started

To get started with AlgoViz, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/JYasha11/Algo-Viz-CTP-Fork/tree/main
   ```

2. **Set Up the Backend**:

   - Navigate to the `backend/` directory and install the required dependencies.
   - Set up a PostgreSQL database and configure the connection in the backend.
   - Run the backend server using `node server.js`.

3. **Set Up the Frontend**:

   - Navigate to the `frontend/` directory and install the required dependencies.
   - Configure any environment variables required for the frontend.
   - Start the React development server using `npm start` or `yarn start`.

4. **Database Initialization**:

   - Use the scripts in the `database/` directory to initialize the database with problem data.

5. **Access the Application**:

   Open your web browser and navigate to `http://localhost:3000` to access AlgoViz.

## Usage

1. **Problem Organization**: Browse through the organized LeetCode problems by topic and difficulty to find the problems that interest you.

2. **Progress Tracking**: Mark problems as solved to keep track of your progress and monitor your improvement over time.

3. **Sorting Algorithm Visualizations**: Explore interactive visualizations of various sorting algorithms to gain a better understanding of their operation.

## License

AlgoViz is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.