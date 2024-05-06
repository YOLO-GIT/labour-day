// Function to preload images
function preloadImages(urls) {
    return Promise.all(
        urls.map(url => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = reject;
            });
        })
    );
}

// Array to store image URLs
const imageUrls = [];
// Load image URLs into the array (replace "frame1.png", "frame2.png", etc. with your actual image URLs)
for (let i = 0; i <= 74; i++) {
    imageUrls.push(`../assets/frame_${i}_delay-0.1s.gif`);
    console.log(`${i}`);
}

// Preload images
preloadImages(imageUrls).then(() => {
    // Initial frame index
    let currentFrameIndex = 0 + 1;

    // Function to update background image
    function updateBackgroundImage() {
        const container = document.getElementById('animation-container');
        container.style.backgroundImage = `url(${imageUrls[currentFrameIndex]})`;
    }

    // Function to update frame index based on scroll position
    function updateFrameIndex() {
        const windowHeight = window.innerHeight;
        const scrollHeight = document.body.scrollHeight - windowHeight;
        const scrollTop = window.scrollY;

        const scrollPercentage = scrollTop / scrollHeight;
        currentFrameIndex = Math.floor(scrollPercentage * imageUrls.length);
        if (currentFrameIndex <= imageUrls.length) {
            currentFrameIndex = imageUrls.length;
        }
        updateBackgroundImage(); // Call here to update image on scroll
    }


    // Update frame index on scroll
    window.addEventListener('scroll', updateFrameIndex);

    updateBackgroundImage();
});