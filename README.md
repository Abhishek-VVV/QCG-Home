# QCG Home Page

## Description

QCG Home Page is a web application built using Express.js with server-side rendering via EJS. The project includes a structured backend, a public directory for frontend assets, and database connectivity.

## Features

- Express.js for server-side logic
- EJS for templating
- Database integration for storing feedbacks
- Static assets (CSS, JavaScript, and images)

## Project Structure

QCG-HOME-PAGE/
│-- models/
│   ├── database.js          # Handles database operations
│-- public/
│   ├── assets/images/      # Stores static images
│   ├── scripts/script.js   # Frontend JavaScript
│   ├── styles/style.css    # Stylesheet
│-- views/
│   ├── Home.ejs            # Main EJS view
│-- main.js                 # Entry point of the application
│-- package.json            # Dependencies and scripts

## Installation

1. Clone the repository using commands:
   git clone <repo_url>
   cd QCG-HOME-PAGE

2. install node_module folder using command npm install


## Usage

1. Start the serve using command:
   nodemon main.js
   
3. Open a browser and navigate to:
   ```
   http://localhost:3000
   ```

Ensure Node.js is installed.
