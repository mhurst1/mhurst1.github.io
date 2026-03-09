/* Matthew Hurst | CSCE 242 */

const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
        mainNav.classList.toggle("show");
    });
}

let influencers = [];
let startIndex = 0;
const cardsPerView = 3;

function displayInfluencers() {
    const influencerList = document.getElementById("influencer-list");
    if (!influencerList) return;

    influencerList.innerHTML = "";

    for (let i = 0; i < cardsPerView; i++) {
        const index = (startIndex + i) % influencers.length;
        const influencer = influencers[index];

        const card = document.createElement("a");
        card.className = "influencer-card";
        card.href = influencer.youtube;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        card.innerHTML = `
            <div class="upper-frame">
                <img src="${influencer.img_name}" alt="${influencer.name}">
                <p>${influencer.name}</p>
            </div>
        `;

        influencerList.appendChild(card);
    }
}

async function loadInfluencers() {
    const url = "https://mhurst1.github.io/projects/part7/json/influencers.json";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        influencers = await response.json();
        displayInfluencers();
    } catch (error) {
        console.error("Error loading influencers:", error);

        const influencerList = document.getElementById("influencer-list");
        if (influencerList) {
            influencerList.innerHTML = `<p class="error">Influencer data could not be loaded.</p>`;
        }
    }
}

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        if (influencers.length === 0) return;
        startIndex = (startIndex - 1 + influencers.length) % influencers.length;
        displayInfluencers();
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        if (influencers.length === 0) return;
        startIndex = (startIndex + 1) % influencers.length;
        displayInfluencers();
    });
}

loadInfluencers();