/* Matthew Hurst | CSCE 242 */

const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
        mainNav.classList.toggle("show");
    });
}

let exercises = [];

function displayExercises(exerciseArray) {
    const exerciseList = document.getElementById("exercise-list");
    if (!exerciseList) return;

    exerciseList.innerHTML = "";

    exerciseArray.forEach((exercise) => {
        const card = document.createElement("a");
        card.className = "exercise-card";
        card.href = exercise.link || "../tutorials/index.html";
        card.target = "_blank";

        card.innerHTML = `
            <div class="middle-frames">
                <img src="../${exercise.img_name}" alt="${exercise.name}">
                <h2>${exercise.name}</h2>
                <p>${exercise.description}</p>
            </div>
        `;

        exerciseList.appendChild(card);
    });
}

async function loadExercises() {
    const url = "https://mhurst1.github.io/projects/part7/json/exercises.json";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        exercises = await response.json();
        displayExercises(exercises);
    } catch (error) {
        console.error("Error loading exercises:", error);

        const exerciseList = document.getElementById("exercise-list");
        if (exerciseList) {
            exerciseList.innerHTML = `<p class="error">Exercise data could not be loaded.</p>`;
        }
    }
}

function filterExercises(category){

    if(category === "All"){
        displayExercises(exercises);
        return;
    }

    const filtered = exercises.filter(exercise =>
        exercise.category === category
    );

    displayExercises(filtered);

}

document.querySelectorAll("#workout-nav button").forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;
        filterExercises(category);

    });

});

loadExercises();