// This script handles the thame toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const html = document.documentElement;
  // Check for saved theme preference or use user's system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    html.classList.add("dark");
    themeToggle.classList.add("dark");
  }
  themeToggle.addEventListener("click", function () {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      themeToggle.classList.remove("dark");
      localStorage.setItem("theme", "light");
      themeToggle.querySelector(".theme-toggle-circle i").className =
        "ri-sun-line ri-sm";
      // Tema light olduysa dropdown'u güncelle
      document
        .getElementById("languageDropdown")
        .classList.remove("dark:bg-gray-800");
      document.getElementById("languageDropdown").classList.add("bg-white");
    } else {
      html.classList.add("dark");
      themeToggle.classList.add("dark");
      localStorage.setItem("theme", "dark");
      themeToggle.querySelector(".theme-toggle-circle i").className =
        "ri-moon-line ri-sm";
    }
  });
});
