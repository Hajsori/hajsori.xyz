// ©️ hajsori.xyz

const navDropdown = document.querySelector(".nav-dropdown");
const navBurger = document.querySelector(".nav-burger");
const navBar = document.querySelector("nav");
const navList = document.querySelectorAll(".nav-list");

let forceOpen = null;

navBurger.addEventListener("click", () => {
    forceOpen = !forceOpen;

    navBurger.classList.toggle("active", forceOpen);
    navBar.classList.toggle("active", forceOpen);
});
navDropdown.addEventListener("mouseenter", () => {
    navBurger.classList.toggle("active", true);
    navBar.classList.toggle("active", true);
});
navDropdown.addEventListener("mouseleave", () => {
    if (!forceOpen) {
        navBurger.classList.toggle("active", false);
        navBar.classList.toggle("active", false);
    }
});
navList.forEach((nav) => {
    nav.addEventListener("click", () => {
        if (forceOpen) {
            forceOpen = !forceOpen;
        }
        navBurger.classList.toggle("active", forceOpen);
        navBar.classList.toggle("active", forceOpen);
    })
})
