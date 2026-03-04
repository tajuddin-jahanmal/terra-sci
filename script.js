(function() {
    // smooth scrolling is native via CSS, we also add a small glow interaction
    const cards = document.querySelectorAll('[data-glow]');
    cards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        this.style.setProperty('--x', x + 'px');
        this.style.setProperty('--y', y + 'px');
    });
    });

    // optional: active link highlight while scrolling (simple)
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "#cbd5e0";
        link.style.textShadow = "none";
        if (link.getAttribute("href") === `#${current}`) {
        link.style.color = "#b3ffe0";
        }
    });
    });

    // progressive loading feel (no extra)
})();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

console.log("Hi, javascript");
