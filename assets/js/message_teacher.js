// Sample teacher data
const teachers = ["Mrs. Green", "Mr. Blue", "Ms. Yellow"];

// Populate teacher dropdown
const populateTeacherDropdown = () => {
  const teacherName = document.getElementById("teacherName");
  teachers.forEach((teacher) => {
    const option = document.createElement("option");
    option.value = teacher;
    option.textContent = teacher;
    teacherName.appendChild(option);
  });
};

// Handle message submission
document.getElementById("messageForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const teacher = document.getElementById("teacherName").value;
  const message = document.getElementById("message").value;

  alert(`Message sent to ${teacher}:\n\n${message}`);
  document.getElementById("messageForm").reset();
});

// Initial population
document.addEventListener("DOMContentLoaded", populateTeacherDropdown);
