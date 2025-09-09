// Smooth scroll effect
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Active nav highlight on scroll
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav a");

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector("nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });
});
