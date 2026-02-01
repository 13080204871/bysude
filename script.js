document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeBtn");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      btn.innerText = "☀️ Aydınlık Mod";
    } else {
      btn.innerText = "🌙 Karanlık Mod";
    }
  });
});
// Scroll animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
