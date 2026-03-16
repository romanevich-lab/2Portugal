const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });
}

const leadForm = document.getElementById("leadForm");

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const budget = document.getElementById("budget")?.value.trim() || "";
    const location = document.getElementById("location")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";

    const subject = encodeURIComponent("Новая заявка с сайта 2Portugal");
    const body = encodeURIComponent(
      `Имя: ${name}\n` +
      `Email: ${email}\n` +
      `Бюджет: ${budget}\n` +
      `Район: ${location}\n\n` +
      `Комментарий:\n${message}`
    );

    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  });
}