/*=============== SHOW MENU ===============*/
const showMenu = (navId, toggleId) => {
    const nav = document.querySelector(navId);
    const toggle = document.querySelector(toggleId);

    toggle.addEventListener('click', () => {
        nav.classList.toggle('max-largeScreens:left-[-200%]');
        nav.classList.toggle('max-largeScreens:left-0');
        toggle.classList.toggle('rotate-90')
    })
}
showMenu('.nav_list', '.nav_toggle');


/*=============== REMOVE MOBILE MENU ON NAV CLICK ===============*/
const navLinks = document.querySelectorAll('.nav_link');
const toggle = document.querySelector('.nav_toggle');
const linkAction = () => {
    const nav = document.querySelector('.nav_list');
    nav.classList.toggle('max-largeScreens:left-[-200%]');
    nav.classList.toggle('max-largeScreens:left-0');
    toggle.classList.toggle('rotate-90')
}

navLinks.forEach(link => link.addEventListener('click', linkAction))

/*=============== ADD HEADER SHADOW ON SCROLL ===============*/
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('shadow-md/50');
    }else{
        header.classList.remove('shadow-md/50');
    }
})

//=========================== SERVICES SECTION SWIPER JS ============================*/

const swiperReviews = new Swiper('.reviews_swiper', {
    loop: true,
    spaceBetween : 16,
    grabCursor: true,
    speed: 600,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
  
  });