# Student Management System

## Project Description

The Student Management System is a simple web-based application developed for managing student records in a college environment.

The application provides basic student management operations such as adding, displaying, searching, and deleting student records.

## Technologies Used

- HTML
- CSS
- JavaScript
- Git
- GitHub

## Features

1. Add Student
   - Student ID
   - Student Name
   - Course

2. Display Student Details
   - Displays all registered students in a table.

3. Search Student
   - Search students using Student ID.

4. Delete Student
   - Delete a student record from the list.

## Project Structure

```text
StudentManagement/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── LICENSE
└── .gitignore
## Testing

The following functionalities were tested successfully:

- Student registration with Student ID, Name, and Course.
- Prevention of duplicate Student IDs.
- Display of registered student details.
- Student search using Student ID.
- Student deletion with confirmation.
- Validation of empty input fields.

## Git Version Control

The project was maintained using Git and GitHub.

The feature-based branching strategy allows individual functionalities to be developed independently before being integrated into the `develop` branch. After all features were tested and integrated, the `develop` branch was prepared for merging into the stable `main` branch.

This workflow helps reduce conflicts, maintains a stable production branch, and supports collaborative development.