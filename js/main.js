function showPage(pageName) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  const targetPage = document.getElementById(pageName);
  if (targetPage) {
    targetPage.classList.add("active");
  }

  updateNavigation(pageName);

  closeMobileMenu();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateNavigation(activePage) {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.onclick && link.onclick.toString().includes(activePage)) {
      link.classList.add("active");
    }
  });
}

function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  const hamburger = document.querySelector(".hamburger");

  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
}

function closeMobileMenu() {
  const navMenu = document.getElementById("nav-menu");
  const hamburger = document.querySelector(".hamburger");

  navMenu.classList.remove("active");
  hamburger.classList.remove("active");
}

// Contact form submission
function handleContactForm() {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
        form.style.display = "none";
        successMessage.style.display = "block";

        setTimeout(function () {
          form.reset();
          form.style.display = "block";
          successMessage.style.display = "none";
        }, 3000);
      } else {
        alert("Please fill in all fields");
      }
    });
  }
}

function handleOutsideClick() {
  document.addEventListener("click", function (e) {
    const navMenu = document.getElementById("nav-menu");
    const hamburger = document.querySelector(".hamburger");

    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

function handleWindowResize() {
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  handleContactForm();
  handleOutsideClick();
  handleWindowResize();
  showPage("home");
});
