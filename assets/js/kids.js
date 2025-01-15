// Sample kids data
const kids = [
    { name: "Alex", grade: "Year 3", teacher: "Mrs. Green" },
    { name: "Sophia", grade: "Year 5", teacher: "Mr. Blue" },
  ];
  
  // Render kid cards
  const renderKids = () => {
    const kidsCards = document.getElementById("kidsCards");
    kidsCards.innerHTML = "";
  
    kids.forEach((kid, index) => {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${kid.name}</h5>
            <p class="card-text">Grade: ${kid.grade}</p>
            <p class="card-text">Teacher: ${kid.teacher}</p>
            <a href="./student_d.html?student=${index}" class="btn btn-primary">View Details</a>
          </div>
        </div>
      `;
      kidsCards.appendChild(card);
    });
  };
  
  // Initial rendering
  document.addEventListener("DOMContentLoaded", renderKids);
  