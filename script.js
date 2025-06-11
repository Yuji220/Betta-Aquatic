document.addEventListener('DOMContentLoaded', function () {
  // CTA Button
  const ctaButton = document.getElementById('cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', function () {
      alert('Selamat menjelajahi BettaVerse! Temukan inspirasi ikan cupang favoritmu.');
    });
  }

  // Scroll-Spy untuk nav-link (header & bottom-nav)
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section');
  function updateActiveNav() {
    let current = '';
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      if (scrollY >= section.offsetTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Galeri slider
  const galeriItems = document.querySelectorAll('.galeri-item');
  let galeriIndex = 0;
  function showGaleri(idx) {
    galeriItems.forEach((item, i) => {
      item.classList.toggle('active', i === idx);
    });
  }
  document.getElementById('galeri-prev').onclick = function () {
    galeriIndex = (galeriIndex - 1 + galeriItems.length) % galeriItems.length;
    showGaleri(galeriIndex);
  };
  document.getElementById('galeri-next').onclick = function () {
    galeriIndex = (galeriIndex + 1) % galeriItems.length;
    showGaleri(galeriIndex);
  };
});