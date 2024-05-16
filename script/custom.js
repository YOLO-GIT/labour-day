document.getElementById("toggleButton").addEventListener("click", function () {
    document.getElementById("secretTwo").classList.toggle("hidden");

    if (!secretTwo.classList.contains('hidden')) {
        // secretTwo.classList.add('animate-fadeInDown');
    }
});