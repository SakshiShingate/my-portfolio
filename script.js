// Reveal Sections on Scroll with Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("visible");
    }
  });
}

// Run once on load & on scroll
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);

// Image Modal Viewer
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".clickable").forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.getAttribute("data-src");
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
