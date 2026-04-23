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
    } else {
        header.classList.remove('shadow-md/50');
    }
})

//=========================== SERVICES SECTION SWIPER JS ============================*/

const swiperReviews = new Swiper('.reviews_swiper', {
    loop: true,
    spaceBetween: 16,
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

//=========================== SHOW SCROLL UP ============================*/

const showScroll = () => {
    const scrollUp = document.querySelector('.scrollUp');

    if (this.scrollY >= 350) {
        scrollUp.classList.remove('-bottom-full')
        scrollUp.classList.add('bottom-12')
    } else {
        scrollUp.classList.remove('bottom-12')
        scrollUp.classList.add('-bottom-full')
    }

}
window.addEventListener('scroll', showScroll)

//=========================== SHOW ACTIVE LINK JS ============================*/

const sections = document.querySelectorAll('section[id');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 58;
        const sectionId = section.getAttribute('id');
        const sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            // sectionClass.classList.remove('text-title-color')
            // sectionClass.classList.add('text-text-first-color')
            if (sectionClass !== null) {
                sectionClass.style.color = 'var(--color-first-color)';
            }
            
        } else {
            // sectionClass.classList.remove('text-text-first-color')
            // sectionClass.classList.add('text-title-color')
            if (sectionClass !== null) {
                sectionClass.style.color = 'var(--color-title-color)';
            }
        }
    })
}

window.addEventListener('scroll', scrollActive)

//=========================== SCROLL REVILE ANIMATIONS ============================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    // reset: true,
  });

  sr.reveal('.home_title, .home_description, .home_button', { interval: 100 });
  sr.reveal('.home_socials', { delay: 600 });
  sr.reveal('.home_image', { delay: 900 });
  sr.reveal('.home_phone', { origin: 'left', delay: 1500 });
  sr.reveal('.home_comment', { origin: 'right', delay: 1180 });

  sr.reveal('.section__subtitle, .section__title, .service_card', { interval: 100 });

  sr.reveal('.menu_card', { interval: 100 });

  sr.reveal('.reviews_content', { origin: 'right' });
  sr.reveal('.reviews_image', { origin: 'left', delay: 600 });
  
  sr.reveal('.app_data section__subtitle, .app_data .section__title, .app_data .section_discription, .app_data .button', { interval: 100 });
  sr.reveal('.app_image', { origin: 'bottom', delay: 600 });

  sr.reveal('.map_area', { origin: 'right', delay: 600 });
  sr.reveal('.map_card', { origin: 'left', delay: 600 });

  sr.reveal('.footer_data, .footer_content div', { interval: 100 });