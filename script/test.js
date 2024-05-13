 // Split the text into words
 const splitText = new SplitType('#text', {
     type: 'words'
 });
 const words = splitText.words;

 // Add event listeners to each word
 words.forEach(word => {
     word.addEventListener('mouseenter', () => {
         gsap.to(word, {
             scale: 1.2,
             duration: 0.8,
             ease: "power3.inOut",
             color: "gold",
         });
     });

     word.addEventListener('mouseleave', () => {
         gsap.to(word, {
             scale: 1,
             duration: 0.8,
             ease: "power3.out",
             color: "black"
         });
     });
 });