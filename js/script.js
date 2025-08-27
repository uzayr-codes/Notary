// script.js

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    // reset first
    link.classList.remove("active");

    // check if link matches current page
    if (link.getAttribute("href").includes(currentPage)) {
      link.classList.add("active");
    }

    if (currentPage === "" || currentPage === "index.html") {
      document.querySelector('a[href*="index.html"]').classList.add("active");
    }
  });

  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  const appointmentForm = document.querySelector(".form-background");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", e => {
      e.preventDefault();

      let name = document.querySelector("#name").value.trim();
      let email = document.querySelector("#email").value.trim();
      let date = document.querySelector("#appointmentDate").value.trim();

      if (!name || !email || !date) {
        alert("⚠️ Please fill out all fields.");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("⚠️ Enter a valid email address.");
        return;
      }

      alert("✅ Appointment booked successfully!");
      appointmentForm.reset();
    });
  }

  // ===== SCROLL TO TOP BUTTON =====
  const scrollBtn = document.createElement("button");
  scrollBtn.id = "scrollToTop";
  scrollBtn.innerHTML = "⬆";
  scrollBtn.style.cssText = `
    display:none; position:fixed; bottom:20px; right:20px;
    padding:10px 15px; border:none; border-radius:50%;
    background:#333; color:white; font-size:18px; cursor:pointer;
  `;
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ===== TEAM CARD HOVER EFFECT =====
  const teamCards = document.querySelectorAll(".team-card");
  teamCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("shadow-lg");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("shadow-lg");
    });
  });
});
