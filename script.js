// ================= NAVIGATION & MENU =================
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const navLinks = document.querySelectorAll(".nav-links li a");

// Hide menu initially for mobile
menu.style.display = "none";

// Toggle menu on mobile
menuBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// Adjust menu on window resize
function checkScreen() {
    if (window.innerWidth <= 768) {
        menuBtn.style.display = "block";
        menu.style.display = "none"; // hide menu on mobile by default
    } else {
        menuBtn.style.display = "none";
        menu.style.display = "flex"; // show menu on desktop
    }
}

window.addEventListener("load", checkScreen);
window.addEventListener("resize", checkScreen);

// Smooth scroll when clicking nav links
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }

        // Close menu on mobile after clicking
        if (window.innerWidth <= 768) {
            menu.style.display = "none";
        }
    });
});

// ================= CONTACT FORM =================
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const nameInput = form.querySelector('input[name="name"]');
        const messageInput = form.querySelector('textarea[name="message"]');

        alert(`Thank you, ${nameInput?.value || "friend"}! Your message has been sent.`);

        form.reset();
    });
}

// ================= DYNAMIC GREETING =================
const homeSection = document.getElementById("home");

if (homeSection) {
    const greeting = document.createElement("p");
    const hours = new Date().getHours();

    if (hours < 12) {
        greeting.textContent = "Good Morning! Enjoy your coffee ☕";
    } else if (hours < 18) {
        greeting.textContent = "Good Afternoon! Treat yourself 🍰";
    } else {
        greeting.textContent = "Good Evening! Relax with a warm drink 🌙";
    }

    homeSection.appendChild(greeting);
}
