document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".hero-content .btn");
    if (!button) return;

    button.style.opacity = 0;

    setTimeout(() => {
        button.style.transition = "opacity 0.6s ease";
        button.style.opacity = 1;
    }, 800);
});

// document.querySelectorAll(".photo-row img").forEach(img => {
//     img.addEventListener("mouseenter", () => {
//         img.closest(".timeline-item").style.transform = "translateX(6px)";
//     });

//     img.addEventListener("mouseleave", () => {
//         img.closest(".timeline-item").style.transform = "translateX(0)";
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelopeTrigger");
    const letter = document.querySelector(".letter-paper");

    envelope.addEventListener("click", () => {
        envelope.classList.add("open");
        letter.classList.remove("hidden");
    });
});
