document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const message = document.getElementById("message");

    yesButton.addEventListener("click", function () {
        message.innerHTML = "💖 Yay ! J’ai hâte de célébrer avec toi ! 💖";
    });

    noButton.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
