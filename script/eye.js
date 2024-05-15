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

var mr_Eye = document.getElementById("mrEye");
var clickCount = 0;

function toggleEye() {
    if (mr_Eye) {
        clickCount++;
        console.log("Ouch! it hurt man!");
        if (clickCount === 2) {
            console.log("No! There is no secret");
            if (clickCount === 3) {
                console.log("When I said no... I mean it!");
                if (clickCount === 4) {
                    console.log("Look, I don't know what is your problem but the `entity` is not here. Believe me.");
                    if (clickCount === 5) {
                        console.log("Ouch! Really? >:(");
                        if (clickCount === 6) {
                            console.log("Ouch! Fine! I will tell u. My name is Eye boll and... that's it. :D");
                            if (clickCount === 7) {
                                console.log("Okay! Okay! I am one of `entity`'s accomplice. She is... doing something... else. But, don't worry u will find her in the future. I am only just slacking of here :D.");
                                if (clickCount === 8) {
                                    console.log("For the love of- Fuck u >:( -Eyebollz123 has left.");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}