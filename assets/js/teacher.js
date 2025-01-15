// Example data for teacher and subjects
const teacherData = {
    name: "John Smith",
    department: "Mathematics",
    subjects: [
      { name: "Algebra", id: 1 },
      { name: "Geometry", id: 2 },
      { name: "Calculus", id: 3 }
    ]
  };
  
  // Populate teacher details
  document.getElementById("teacherName").innerText = teacherData.name;
  document.getElementById("teacherDepartment").innerText = teacherData.department;
  
  // Populate subjects
  const subjectsList = document.getElementById("subjectsList");
  
  teacherData.subjects.forEach(subject => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-3");
    card.innerHTML = `
      <div class="card" onclick="window.location.href = 'students.html?subjectId=${subject.id}'">
        <div class="card-body">
          <h5 class="card-title">${subject.name}</h5>
        </div>
      </div>
    `;
    subjectsList.appendChild(card);
  });
  