// Sidebar
const body = document.querySelector('body');
const sidebar = body.querySelector('.sidebar');
const toggleIcon = body.querySelector('.toggle-icon');
const searchBtn = body.querySelector('.search-box');
const scrollThreshold = 60; // Cantidad de scroll en píxeles para mostrar el sidebar

toggleIcon.addEventListener('click', () => {
  sidebar.classList.toggle('close');
});

searchBtn.addEventListener('click', () => {
  sidebar.classList.remove('close');
});

// Mostrar el sidebar al desplazarse hacia abajo
function showSidebarOnScroll() {
  if (window.scrollY > scrollThreshold) {
    sidebar.classList.remove('hidden');
  } else {
    sidebar.classList.add('hidden');
  }
}
window.addEventListener('scroll', showSidebarOnScroll);
// Fin Sidebar

// SwiperJS Card Carousel
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
// Fin SwiperJS Card Carousel