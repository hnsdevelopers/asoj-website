/* ===== ASOJ static site — shared behaviour ===== */

/* ---- EmailJS config: replace with your own IDs from emailjs.com ---- */
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_CONTACT_TEMPLATE_ID = "YOUR_CONTACT_TEMPLATE_ID";
const EMAILJS_NEWSLETTER_TEMPLATE_ID = "YOUR_NEWSLETTER_TEMPLATE_ID";

if (window.emailjs) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

/* ---- Mobile menu ---- */
function toggleMobileMenu() {
  document.getElementById("mobileNav")?.classList.toggle("open");
}

/* ---- Desktop dropdowns ---- */
document.querySelectorAll(".has-dropdown > button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const parent = btn.parentElement;
    const wasOpen = parent.classList.contains("open");
    document.querySelectorAll(".has-dropdown.open").forEach((d) => d.classList.remove("open"));
    if (!wasOpen) parent.classList.add("open");
  });
});
document.addEventListener("click", () => {
  document.querySelectorAll(".has-dropdown.open").forEach((d) => d.classList.remove("open"));
});

/* ---- Highlight current nav link (set body[data-page]) ---- */
(function highlightNav() {
  const page = document.body.getAttribute("data-page");
  if (!page) return;
  document.querySelectorAll(`nav.primary-nav a[data-page="${page}"]`).forEach((a) => a.classList.add("active"));
})();

/* ---- Hero image slider (Home page) ---- */
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dots button");
  if (!slides.length) return;
  let current = 0;

  function show(i) {
    slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
    dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
    current = i;
  }
  function next() { show((current + 1) % slides.length); }
  function prev() { show((current - 1 + slides.length) % slides.length); }

  document.querySelector(".hero-arrow.next")?.addEventListener("click", next);
  document.querySelector(".hero-arrow.prev")?.addEventListener("click", prev);
  dots.forEach((d, idx) => d.addEventListener("click", () => show(idx)));

  setInterval(next, 5000);
}
document.addEventListener("DOMContentLoaded", initHeroSlider);

/* ---- Newsletter form (footer, every page) ---- */
function initNewsletterForm() {
  const form = document.getElementById("newsletterForm");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("newsletterStatus");
    const email = form.elements["email"].value;

    if (!window.emailjs) {
      status.textContent = "Email service not loaded. Please try again later.";
      status.className = "form-status err";
      return;
    }

    status.textContent = "Sending…";
    status.className = "form-status";

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_NEWSLETTER_TEMPLATE_ID, { subscriber_email: email })
      .then(() => {
        status.textContent = "Thanks for subscribing!";
        status.className = "form-status ok";
        form.reset();
      })
      .catch((err) => {
        status.textContent = "Something went wrong. Please try again.";
        status.className = "form-status err";
        console.error(err);
      });
  });
}
document.addEventListener("DOMContentLoaded", initNewsletterForm);

/* ---- Contact form (Contact Us page) ---- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("contactStatus");

    if (!window.emailjs) {
      status.textContent = "Email service not loaded. Please try again later.";
      status.className = "form-status err";
      return;
    }

    status.textContent = "Sending…";
    status.className = "form-status";

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE_ID, form)
      .then(() => {
        status.textContent = "Message sent — thank you! We'll get back to you soon.";
        status.className = "form-status ok";
        form.reset();
      })
      .catch((err) => {
        status.textContent = "Something went wrong. Please try again.";
        status.className = "form-status err";
        console.error(err);
      });
  });
}
document.addEventListener("DOMContentLoaded", initContactForm);
