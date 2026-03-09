/* Matthew Hurst | CSCE 242 */

const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
        mainNav.classList.toggle("show");
    });
}

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                formMessage.textContent = "Success! Your message has been sent.";
                formMessage.style.color = "#7CFC98";
                contactForm.reset();
            } else {
                formMessage.textContent = "Error: Please make sure all fields are filled out correctly.";
                formMessage.style.color = "#ffb3b3";
            }
        } catch (error) {
            formMessage.textContent = "Error: Message could not be sent right now.";
            formMessage.style.color = "#ffb3b3";
        }
    });
}
