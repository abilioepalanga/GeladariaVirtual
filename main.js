/*-------Toggle Button_marcador de seção--*/
const navMenu = document.getElementById("nav-menu"),
    navLink = document.querySelectorAll(".nav-link"),
    hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        hamburger.classList.toggle("ri-close-large-line");
    });
});

/*-------Show Scroll Up_exibir apos rolar a página--+++++++*/
const scrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
    } else {
        scrollUp.classList.remove("show-scroll");
    }
});

/*-------Change Background Header_alterar o fundo header---->
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
});

/*-------Swiper____criar sliders------------*/
const swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

//Change Background Header

/*-------Swiper____criar sliders------------*/
const swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});

/*------Scrool Sections Active Link_link ativo ao rolar a página--*/
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*------Scroll Reveall Animation_animação ao rolar a página--*/
const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 2000,
    reset: true,
});

sr.reveal(
    `.home-content, .about-content, .services-content, .menu-content, .app-content, .contact-content`,
    {
        interval: 200,
    }
);
