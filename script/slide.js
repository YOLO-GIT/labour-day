document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    // looking for a non-scrubbing version? https://codepen.io/GreenSock/pen/QWYdgjG

    let frameCount = 259;
    let urls = new Array(frameCount).fill().map((o, i) => {
        let url = `../../assets/real/frame_${(i + 1)}_delay-0.1s.png`;
        console.log(`Image URL: ${url}`); // Debugging: Check the generated URLs
        return url;
    });

    imageSequence({
        urls, // Array of image URLs
        canvas: "#image-sequence", // <canvas> object to draw images to
        clear: true, // only necessary if your images contain transparency
        scrollTrigger: {
            start: "0", // start at the very top
            end: "center 30%", // entire page
            scrub: true, // important!
            onUpdate: (self) => {
                // When the scrolling animation completes
                if (self.progress > 0.98) {
                    // Animate the opacity of the image sequence to 0
                    gsap.to("#image-sequence", {
                        opacity: 0,
                    });
                } else if (self.progress < 0.98) {
                    gsap.to("#image-sequence", {
                        opacity: 1,
                    });
                }
            },
        },
    });

    // Animation to start with opacity 1
    gsap.from("#image-sequence", {
        opacity: 1,
    });

    function imageSequence(config) {
        let playhead = {
                frame: 0,
            },
            canvas = document.querySelector(config.canvas);
        if (!canvas) {
            console.error("Canvas not found"); // Debugging: Check if canvas exists
            return;
        }
        let ctx = canvas.getContext("2d"),
            curFrame = -1,
            onUpdate = config.onUpdate,
            images,
            updateImage = function () {
                let frame = Math.round(playhead.frame);
                if (frame !== curFrame) {
                    // only draw if necessary
                    config.clear && ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(images[Math.round(playhead.frame)], 0, 0);
                    curFrame = frame;
                    onUpdate && onUpdate.call(this, frame, images[frame]);
                }
            };
        images = config.urls.map((url, i) => {
            let img = new Image();
            img.src = url;
            img.onload = () => {
                console.log(`Image ${i + 1} loaded`); // Debugging: Check if images load
                if (i === 0) {
                    updateImage(); // Ensure first image draws immediately
                }
            };
            img.onerror = () => {
                console.error(`Image ${i + 1} failed to load: ${url}`); // Debugging: Handle load errors
            };
            return img;
        });
        return gsap.to(playhead, {
            frame: images.length - 1,
            ease: "none",
            onUpdate: updateImage,
            duration: images.length / (config.fps || 30),
            paused: !!config.paused,
            scrollTrigger: config.scrollTrigger,
        });
    }
});