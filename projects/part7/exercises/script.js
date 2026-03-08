/* Matthew Hurst | CSCE 242 */

const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
        mainNav.classList.toggle("show");
    });
}

async function loadExercises() {
    const exerciseList = document.getElementById("exercise-list");
    if (!exerciseList) return;

    const url = "https://mhurst1.github.io/projects/part7/json/exercises.json";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const exercises = await response.json();
        exerciseList.innerHTML = "";

        exercises.forEach((exercise) => {
            const card = document.createElement("a");
            card.className = "exercise-card";
            card.href = exercise.link || "../tutorials/index.html";

            card.innerHTML = `
                <div class="middle-frames">
                    <img src="../${exercise.img_name}" alt="${exercise.name}">
                    <h2>${exercise.name}</h2>
                    <p>${exercise.description}</p>
                </div>
            `;

            exerciseList.appendChild(card);
        });
    } catch (error) {
        console.error("Error loading exercises:", error);
        exerciseList.innerHTML = `<p class="error">Exercise data could not be loaded.</p>`;
    }
}
const exercises = [
  {
    "_id": 1,
    "name": "Barbell Squats",
    "img_name": "images/Exercises-Squat.jpg",
    "description": "Builds lower-body strength targeting quads and glutes.",
    "link": "../tutorials/index.html"
  }
];

loadExercises();