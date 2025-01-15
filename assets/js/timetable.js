// Example of dynamically generating timetable as cards
const timetable = [
  { day: "Monday", time: "9:00 AM - 10:00 AM", subject: "Mathematics" },
  { day: "Monday", time: "10:00 AM - 11:00 AM", subject: "Science" },
  { day: "Tuesday", time: "9:00 AM - 10:00 AM", subject: "English" },
  { day: "Wednesday", time: "1:00 PM - 2:00 PM", subject: "History" },
  { day: "Thursday", time: "2:00 PM - 3:00 PM", subject: "Geography" },
  // Add more timetable slots here
];

const timetableList = document.getElementById("timetableList");

// Loop through timetable and create cards
timetable.forEach((slot) => {
  const card = document.createElement("div");
  card.classList.add("col-md-4", "mb-3");
  card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${slot.subject}</h5>
          <p class="card-text">${slot.day}</p>
          <p class="card-text">Time: ${slot.time}</p>
        </div>
      </div>
    `;
  timetableList.appendChild(card);
});
