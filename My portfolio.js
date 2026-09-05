const animationGroups = [
  ['.hero-content', 'fade-right'],
  ['.hero-image-container', 'fade-left'],
  ['.section-header', 'fade-up'],
  ['.about-left', 'fade-right'],
  ['.about-right', 'fade-left'],
  ['.contact-left', 'fade-right'],
  ['.contact-form', 'fade-up'],
  ['.contact-info-card', 'fade-left'],
  ['.footer-brand', 'fade-up'],
  ['.footer-links', 'fade-up'],
  ['.footer-social', 'fade-up']
];

animationGroups.forEach(([selector, animation]) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.dataset.aos = animation;
  });
});

const staggeredGroups = [
  '.service-card',
  '.tech-item',
  '.project-card',
  '.testimonial-card',
  '.stat-box',
  '.skill-item'
];

staggeredGroups.forEach((selector) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    element.dataset.aos = 'fade-up';
    element.dataset.aosDelay = String(index * 100);
  });
});

if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    offset: 100,
    anchorPlacement: 'top-bottom'
  });
} else {
  document.querySelectorAll('[data-aos]').forEach((element) => {
    element.removeAttribute('data-aos');
    element.removeAttribute('data-aos-delay');
  });
}