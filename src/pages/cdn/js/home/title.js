// ©️ hajsori.xyz

const spans = document.querySelectorAll("#main-title-div span");
const title = document.querySelector(".main-title");

const titles = [
    "Welcome to Hajsori.XYZ",
    "This is my Website",
    "Look around and have fun :D"
];

setInterval(() => {
    for (let i = 0; i < spans.length; i++) {
        setTimeout(() => {
            const span = spans[i];
            span.style.animation = `animate${i + 1} 0.25s linear forwards 2`;

            setTimeout(() => {
                span.style.animation = "none";
            }, 2000);
        }, 125)
    }

    title.style.opacity = "0";
    title.style.transform = "scale(1.5)";
    setTimeout(() => {
        title.innerHTML = titles[Math.floor(Math.random() * titles.length)];

        setTimeout(() => {
            title.style.opacity = "1";
            title.style.transform = "scale(1)";
        }, 200);
    }, 200);
}, 5000);
