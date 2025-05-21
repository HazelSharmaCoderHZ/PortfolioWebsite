document.addEventListener("DOMContentLoaded", function () {
    const words = ["Public Speaker", "Tech Enthusiast", "Problem-Solver", "Web Developer", "Self Motivated Learner"];
    const typingSpan = document.querySelector(".typing-span");

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentWord = words[wordIndex];
        let displayedText = currentWord.substring(0, charIndex);
        typingSpan.textContent = displayedText;

        if (!isDeleting) {
            // Typing effect
            if (charIndex < currentWord.length) {
                charIndex++;
                setTimeout(typeEffect, 80); // Speed of typing
            } else {
                isDeleting = true;
                setTimeout(typeEffect, 700); // Pause before deleting
            }
        } else {
            // Deleting effect
            if (charIndex > 0) {
                charIndex--;
                setTimeout(typeEffect, 40); // Faster deleting speed
            } else {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeEffect, 300); // Pause before typing next word
            }
        }
    }

    // Start the typing effect when the page loads
    typeEffect();
});


