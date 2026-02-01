// Dark mode
const btn = document.getElementById("themeBtn");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll Animations
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => {
  observer.observe(card);
});
