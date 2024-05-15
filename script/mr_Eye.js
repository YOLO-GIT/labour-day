var mr_Eye = document.getElementById("eye");
var clickCount = 0;

function toggleEye() {
    if (mr_Eye) {
        clickCount++;
        if (clickCount === 1) {
            console.log("Ouch! it hurt man!");
        } else if (clickCount === 2) {
            console.log("No! There is no secret");
        } else if (clickCount === 3) {
            console.log("When I said no... I mean it!");
        } else if (clickCount === 4) {
            console.log(
                "Look, I don't know what is your problem but the `entity` is not here. Believe me."
            );
        } else if (clickCount === 5) {
            console.log("Ouch! Really? >:(");
        } else if (clickCount === 6) {
            console.log(
                "Ouch! Fine! I will tell u. My name is Eye boll and... that's it. :D"
            );
        } else if (clickCount === 7) {
            console.log(
                "Okay! Okay! I am one of `entity`'s accomplice. She is... doing something... else. But, don't worry u will find her in the future. I am only just slacking of here :D"
            );
        } else if (clickCount === 8) {
            console.log(
                "For the love of- Fuck u >:("
            );
        } else if (clickCount === 9) {
            console.log("-Eyebollz123 has left.");
        }
    }
}