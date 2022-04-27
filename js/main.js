/* ABRE E FECHA MENU QUANDO CLICAR NO ÍCONE */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle-color");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/* QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* MUDA O HEADER DA PÁGINA QUANDO DER SCROLL */
const header = document.querySelector("#header")
const headerHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= headerHeight) {
      // scroll maior que a altura do header
      header.classList.add("scroll")
    } else {
      // scroll menor que a altura do header
      header.classList.remove("scroll")
    }
}

/** TESTIMONIALS SWIPER/CAROUSEL/SLIDER */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PÁGINA */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* BUTTON BACK TO TOP */


const backTotopButton = window.document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 800) {
    backTotopButton.classList.add('show')
  } else {
    backTotopButton.classList.remove('show')
  }
}

/* MENU ATIVO CONFORME A SEÇÃO ATIVA NA PÁGINA */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for ( const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* WHEN SCROLL (sempre que eu criar uma nova lógica envolvendo scroll, crio a function e a indico a função dentro deste Event Listener ) */
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})