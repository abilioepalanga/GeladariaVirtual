/*-------Toggle Button_marcador de seção--*/
const navMenu = document.getElementById("nav-menu"),
    navLink = document.querySelectorAll(".nav_link"),
    hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((n) => {
    n.addEventListener("click", () => {
        navMenu.classList.remove("left-[0]");
        hamburger.classList.remove("ri-close-large-line");
    });
});
/*-------Show Scroll Up_exibir apos rolar a página--*/

/*-------Change Background Header_alterar o fundo header--*/

/*-------Swiper____criar sliders------------*/

/*------Scrool Sections Active Link_link ativo ao rolar a página--*/

/*------Scroll Reveall Animation_animação ao rolar a página--*/
