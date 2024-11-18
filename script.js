document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('dubstepMusic');
    music.play();
});

function customizeCucumber() {
    const color = document.getElementById('color').value;
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;

    const cucumber = document.getElementById('cucumber');
    cucumber.style.backgroundColor = color;
    cucumber.style.height = `${length * 3}px`; // Scale for visual effect
    cucumber.style.width = `${width * 5}px`; // Scale for visual effect
    cucumber.style.borderRadius = `${width * 2.5}px`;
}