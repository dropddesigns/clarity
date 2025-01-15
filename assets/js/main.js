// Check the user's role on every page load
window.onload = function () {
  const userRole = sessionStorage.getItem("role");
  const currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "principal_d.html" && userRole !== "Principal") {
    window.location.href = "index.html";
  } else if (
    currentPage === "teacher_d.html" &&
    userRole !== "Teacher" &&
    userRole !== "Principal"
  ) {
    window.location.href = "index.html";
  } else if (
    currentPage === "student_d.html" &&
    userRole !== "Student" &&
    userRole !== "Parent" &&
    userRole !== "Principal"
  ) {
    window.location.href = "index.html";
  } else if (
    currentPage === "parent_d.html" &&
    userRole !== "Parent" &&
    userRole !== "Principal"
  ) {
    window.location.href = "index.html";
  }
};

function selectRole(role) {
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

console.log(userRole);
