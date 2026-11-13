
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please complete all fields.");
        return;
    }

    document.getElementById("responseMessage").textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();
});
