const subjectsLink = document.getElementById("subjectsLink");
const timetableLink = document.getElementById("timetableLink");
const subjectsSection = document.getElementById("subjectsSection");
const timetableSection = document.getElementById("timetableSection");

subjectsLink.addEventListener("click", function () {
  subjectsSection.style.display = "block";
  timetableSection.style.display = "none";
});

timetableLink.addEventListener("click", function () {
  timetableSection.style.display = "block";
  subjectsSection.style.display = "none";
});
