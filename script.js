let students = [];

function addStudent() {

    const id = document.getElementById("studentId").value.trim();
    const name = document.getElementById("studentName").value.trim();
    const course = document.getElementById("studentCourse").value.trim();

    if (id === "" || name === "" || course === "") {
        alert("Please fill all fields.");
        return;
    }

    const existingStudent = students.find(student => student.id === id);

    if (existingStudent) {
        alert("Student ID already exists.");
        return;
    }

    const student = {
        id: id,
        name: name,
        course: course
    };

    students.push(student);

    alert("Student added successfully.");

    document.getElementById("studentId").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("studentCourse").value = "";

    displayStudents();
}


function displayStudents() {

    const tableBody = document.getElementById("studentTableBody");

    tableBody.innerHTML = "";

    students.forEach(student => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
        `;

        tableBody.appendChild(row);
    });
}function searchStudent() {

    const searchId = document.getElementById("searchId").value.trim();

    const result = document.getElementById("searchResult");

    if (searchId === "") {
        result.innerHTML = "Please enter a Student ID.";
        return;
    }

    const student = students.find(student => student.id === searchId);

    if (student) {

        result.innerHTML = `
            Student Found:<br>
            ID: ${student.id}<br>
            Name: ${student.name}<br>
            Course: ${student.course}
        `;

    } else {

        result.innerHTML = "Student not found.";
    }
}