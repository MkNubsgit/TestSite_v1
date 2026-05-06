// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle with persistence
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const stored = localStorage.getItem("theme");
if (stored) root.setAttribute("data-theme", stored);

toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  toggle.textContent = next === "light" ? "☽" : "☀";
});

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});
