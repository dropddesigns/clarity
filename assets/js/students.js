const studentsInSubject = [
    { name: "Alice", id: 1 },
    { name: "Bob", id: 2 },
    { name: "Charlie", id: 3 }
  ];
  
  // Populate student list
  const studentsList = document.getElementById("studentsList");
  
  studentsInSubject.forEach(student => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerHTML = `<a href="student_details.html?studentId=${student.id}">${student.name}</a>`;
    studentsList.appendChild(listItem);
  });
  