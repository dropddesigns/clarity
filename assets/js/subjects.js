const subjects = [
  { name: "Mathematics", grade: "A" },
  { name: "Science", grade: "B+" },
  { name: "English", grade: "A-" },
];

const subjectsList = document.getElementById("subjectsList");

subjects.forEach((subject) => {
  const card = document.createElement("div");
  card.classList.add("col-md-4", "mb-3");
  card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${subject.name}</h5>
          <p class="card-text">Grade: ${subject.grade}</p>
        </div>
      </div>
    `;
  subjectsList.appendChild(card);
});
