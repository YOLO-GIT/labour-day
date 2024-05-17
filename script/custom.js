document.getElementById("toggleButton").addEventListener("click", function () {
    document.getElementById("secretTwo").classList.toggle("hidden");

    if (!secretTwo.classList.contains('hidden')) {
        // secretTwo.classList.add('animate-fadeInDown');
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const marquee = document.querySelector('.animate-marquee');
    const speedRange = document.getElementById('speedRange');

    speedRange.addEventListener('input', () => {
        const speed = speedRange.value;
        marquee.style.animationDuration = `${speed}s`;
    });
});