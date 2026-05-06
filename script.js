(function () {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;
  function current() {
    var set = document.documentElement.getAttribute("data-theme");
    if (set === "light" || set === "dark") return set;
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function render() {
    btn.textContent = current() === "dark" ? "☀" : "☾";
  }
  function set(t) {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("theme", t);
    render();
  }
  btn.addEventListener("click", function () {
    set(current() === "dark" ? "light" : "dark");
  });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", render);
  render();
})();

document.querySelectorAll(".copy").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const text = btn.dataset.copy;
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const r = document.createRange();
      r.selectNodeContents(btn);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
      try { document.execCommand("copy"); } catch {}
      sel.removeAllRanges();
    }
    btn.classList.add("copied");
    setTimeout(() => btn.classList.remove("copied"), 1500);
  });
});
