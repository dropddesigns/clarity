function selectRole(role) {
  // Store the selected role in sessionStorage
  sessionStorage.setItem("role", role);

  if (role === "Principal") {
    window.location.href = "principal_d.html";
  } else if (role === "Teacher") {
    window.location.href = "teacher_d.html";
  } else if (role === "Student") {
    window.location.href = "student_d.html";
  } else if (role === "Parent") {
    window.location.href = "parent_d.html";
  }
}
