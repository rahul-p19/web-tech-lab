let studentsData = [];

// Fetch data from JSON file
function loadData() {

    fetch("students.json")
        .then(response => response.json())   // JSON.parse()
        .then(data => {
            studentsData = data;
            displayData(studentsData);
        })
        .catch(error => {
            console.log("Error loading JSON:", error);
        });
}

// Display data in table
function displayData(data) {

    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    data.forEach(student => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Search function
function searchStudent() {

    const searchValue = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filtered = studentsData.filter(student =>
        student.name.toLowerCase().includes(searchValue)
    );

    displayData(filtered);
}
