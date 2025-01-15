// Sample student data
const students = [
    { name: "Alice", year: "Year 10", address: "123 Main St", parent: "John Doe" },
    { name: "Bob", year: "Year 9", address: "456 Maple Ave", parent: "Jane Smith" },
    { name: "Charlie", year: "Year 8", address: "789 Oak St", parent: "Alice Johnson" }
  ];
  
  // Render student cards
  const renderStudents = () => {
    const studentCards = document.getElementById("studentCards");
    studentCards.innerHTML = ""; // Clear existing cards
  
    students.forEach((student, index) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">Year: ${student.year}</p>
            <p class="card-text">Address: ${student.address}</p>
            <p class="card-text">Parent: ${student.parent}</p>
            <a href="./student_d.html?student=${index}" class="btn btn-primary">View Dashboard</a>
          </div>
        </div>
      `;
      studentCards.appendChild(card);
    });
  };
  
  // Add student functionality
  document.getElementById("addStudentButton").addEventListener("click", () => {
    const name = prompt("Enter student name:");
    const year = prompt("Enter student year:");
    const address = prompt("Enter student address:");
    const parent = prompt("Enter parent's name:");
  
    if (name && year && address && parent) {
      students.push({ name, year, address, parent });
      renderStudents();
    }
  });
  
  // Initial rendering
  document.addEventListener("DOMContentLoaded", renderStudents);
  