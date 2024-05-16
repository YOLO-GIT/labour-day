let splitText;
let words;
// Split the text into words
splitText = new SplitType("#text", {
    type: "words",
});
words = splitText.words;

// Add event listeners to each word
words.forEach((word) => {
    word.addEventListener("mouseenter", () => {
        gsap.to(word, {
            scale: 1.2,
            duration: 0.8,
            ease: "power3.inOut",
            color: "gold",
        });
    });

    word.addEventListener("mouseleave", () => {
        gsap.to(word, {
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            color: "black",
        });
    });
});

// Split the text into words
splitText = new SplitType("#text_two", {
    type: "words",
});
words = splitText.words;

// Add event listeners to each word
words.forEach((word) => {
    word.addEventListener("mouseenter", () => {
        gsap.to(word, {
            scale: 1.2,
            duration: 0.8,
            ease: "power3.inOut",
            color: "red",
        });
    });

    word.addEventListener("mouseleave", () => {
        gsap.to(word, {
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            color: "white",
        });
    });
});

// Split the text into words
splitText = new SplitType("#read", {
    type: "words",
});
words = splitText.words;

// Add event listeners to each word
words.forEach((word) => {
    word.addEventListener("mouseenter", () => {
        gsap.to(word, {
            scale: 1.2,
            duration: 0.8,
            ease: "power3.inOut",
            color: "green",
        });
    });

    word.addEventListener("mouseleave", () => {
        gsap.to(word, {
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            color: "green",
        });
    });
});

// Split the text into words
splitText = new SplitType("#read_two", {
    type: "words",
});
words = splitText.words;

// Add event listeners to each word
words.forEach((word) => {
    word.addEventListener("mouseenter", () => {
        gsap.to(word, {
            scale: 1.2,
            duration: 0.8,
            ease: "power3.inOut",
            color: "white",
        });
    });

    word.addEventListener("mouseleave", () => {
        gsap.to(word, {
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            color: "white",
        });
    });
});

function animateTextOnHover(elementId) {
    // Split the text into words
    const splitText = new SplitType(`#${elementId}`, {
        type: "chars",
    });
    const words = splitText.words;

    // Add event listeners to each word
    words.forEach((word) => {
        word.addEventListener("mouseenter", () => {
            gsap.to(word, {
                scale: 1.2,
                duration: 0.8,
                ease: "power3.inOut",
                color: "red",
            });
        });

        word.addEventListener("mouseleave", () => {
            console.log(`${word.textContent}`); // Log the word
            gsap.to(word, {
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
                color: "black",
            });
        });
    });
}

// Call the function for different elements
animateTextOnHover("secret_one");
animateTextOnHover("secret_two");
animateTextOnHover("secret_three");
animateTextOnHover("secret_four");
animateTextOnHover("secret_five");
animateTextOnHover("secret_six");