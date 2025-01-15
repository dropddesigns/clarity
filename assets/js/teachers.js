// Sample teacher data
const teachers = [
    { name: "Alice", subject: "Mathematics" },
    { name: "Bob", subject: "Science" },
    { name: "Charlie", subject: "History" },
  ];
  
  // Render teacher cards
  const renderTeachers = () => {
    const teacherCards = document.getElementById("teacherCards");
    teacherCards.innerHTML = "";
  
    teachers.forEach((teacher, index) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${teacher.name}</h5>
            <p class="card-text">Subject: ${teacher.subject}</p>
            <a href="./teacher_d.html?teacher=${index}" class="btn btn-primary">View Dashboard</a>
          </div>
        </div>
      `;
      teacherCards.appendChild(card);
    });
  };
  
  // Add teacher functionality
  document.getElementById("addTeacherButton").addEventListener("click", () => {
    const name = prompt("Enter teacher name:");
    const subject = prompt("Enter subject taught:");
    if (name && subject) {
      teachers.push({ name, subject });
      renderTeachers();
    }
  });
  
  // Initial rendering
  document.addEventListener("DOMContentLoaded", renderTeachers);
  