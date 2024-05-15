const box = document.querySelector(".box");
const eye = document.getElementById("eye");
const pupil = document.querySelector(".pupil");
const topLid = document.querySelector(".top-lid");
const bottomLid = document.querySelector(".bottom-lid");

box.addEventListener("mousemove", (e) => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
    const distance = Math.min(
        20,
        Math.sqrt(
            Math.pow(e.clientX - eyeCenterX, 2) + Math.pow(e.clientY - eyeCenterY, 2)
        )
    );
    const pupilX = distance * Math.cos(angle);
    const pupilY = distance * Math.sin(angle);

    gsap.to(pupil, {
        x: pupilX,
        y: pupilY,
        duration: 0.1,
    });

    const eyelidRotation = Math.min(
        30,
        Math.max(-30, ((angle * 180) / Math.PI) * 0.5)
    );
    gsap.to(topLid, {
        rotation: eyelidRotation,
        duration: 0.1,
    });
    gsap.to(bottomLid, {
        rotation: -eyelidRotation,
        duration: 0.1,
    });
});