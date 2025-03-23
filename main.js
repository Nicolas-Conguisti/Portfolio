// Animation des compétences
function initializeSkills() {
  const skillItems = document.querySelectorAll('.skill-item');
  
  skillItems.forEach(item => {
    const level = item.dataset.level;
    item.style.setProperty('--skill-level', `${level}%`);
  });
}

// Animation du scroll
function initializeScrollAnimation() {
  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
  });
}

// Navigation smooth scroll
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Animation de la navbar au scroll
function initializeNavbarAnimation() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.style.transform = 'translateY(0)';
      return;
    }

    if (currentScroll > lastScroll) {
      // Scroll vers le bas
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scroll vers le haut
      navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
  });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
  initializeSkills();
  initializeScrollAnimation();
  initializeSmoothScroll();
  initializeNavbarAnimation();
});