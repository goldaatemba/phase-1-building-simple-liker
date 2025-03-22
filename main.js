document.addEventListener("DOMContentLoaded", () => {
  const EMPTY_HEART = '♡';
  const FULL_HEART = '♥';

  // Hide error modal initially
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");

  function toggleHeart(heart) {
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART;
      heart.classList.add("activated-heart");
    } else {
      heart.textContent = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    }
  }

  document.querySelectorAll(".like-glyph").forEach(heart => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          toggleHeart(heart);
        })
        .catch((error) => {
          modal.classList.remove("hidden");
          document.getElementById("modal-message").textContent = error;
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
