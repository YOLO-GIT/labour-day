// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
    // looking for a non-scrubbing version? https://codepen.io/GreenSock/pen/QWYdgjG

    let frameCount = 259,
        urls = new Array(frameCount)
        .fill()
        .map(
            (o, i) =>
            `../assets/real/frame_00${(i + 1)}_delay-0.1s.gif`
        );

    imageSequence({
        urls, // Array of image URLs
        canvas: "#image-sequence", // <canvas> object to draw images to
        clear: true, // only necessary if your images contain transparency
        scrollTrigger: {
            start: "0", // start at the very top
            end: "center 40%", // entire page
            scrub: true, // important!
            onUpdate: (self) => {
                // When the scrolling animation completes
                if (self.progress > 0.87) {
                    // Animate the opacity of the image sequence to 0
                    gsap.to("#image-sequence", {
                        opacity: 0,
                    });
                } else if (self.progress < 0.87) {
                    gsap.to("#image-sequence", {
                        opacity: 1,
                    });
                }
                console.log("progress", self.progress);
            },
        },
    });

    // Animation to start with opacity 1
    gsap.from("#image-sequence", {
        opacity: 1,
    });

    /*
       Helper function that handles scrubbing through a sequence of images, drawing the appropriate one to the
       provided canvas.
       Config object properties:
       - urls [Array]: an Array of image URLs
       - canvas [Canvas]: the <canvas> object to draw to
           - scrollTrigger [Object]: an optional ScrollTrigger configuration object like {trigger: "#trigger",
           start: "top top", end: "+=1000", scrub: true, pin: true}
           - clear [Boolean]: if true, it'll clear out the canvas before drawing each frame (useful if your
           images contain transparency)
           - paused [Boolean]: true if you'd like the returned animation to be paused initially (this isn't
           necessary if you're passing in a ScrollTrigger that's scrubbed, but it is helpful if you just want a
           normal playback animation)
           - fps [Number]: optional frames per second - this determines the duration of the returned animation.
           This doesn't matter if you're using a scrubbed ScrollTrigger. Defaults to 30fps.
           - onUpdate [Function]: optional callback for when the Tween updates (probably not used very often).
           It'll pass two parameters: 1) the index of the image (zero-based), and 2) the Image that was drawn to
           the canvas

           Returns a Tween instance
           */
    function imageSequence(config) {
        let playhead = {
                frame: 0,
            },
            canvas =
            gsap.utils.toArray(config.canvas)[0] ||
            console.warn("canvas not defined"),
            ctx = canvas.getContext("2d"),
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
            i || (img.onload = updateImage);
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