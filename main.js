"use strict";
//Back To Top Button
var btnTop = document.getElementById("back-top-btn");

document.querySelector(".snap__container").addEventListener("scroll", (e) => {
  //Izpiše trenutni položaj console.log(e.currentTarget.scrollTop);
  e.currentTarget.scrollTop >= 400
    ? btnTop.classList.add("btn-visible")
    : btnTop.classList.remove("btn-visible");
  //NE DELA TUKEJ, KER NI SCROLLANJA ZNOTRAJ WINDOW DOKUMENTA AMPAK JE SAMO ZNOTRAJ snap_container!
  //(document.documentElement.scrollTop >= 10) ? btnTop.classList.add("btn-visible") : btnTop.classList.remove("btn-visible");
});

//MOBILE NAVBAR
const navMenu = document.getElementById("nav-mobile");
const menuOpen = document.getElementById("hamburger");
//const logoMobile = document.getElementById('mobile-logo')

menuOpen.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuOpen.classList.toggle("hamburger__active");
  //logoMobile.classList.toggle('logo-active')
});

//Scroll Mouse Behaviour
/*
$("section").on("wheel", function (e) {
  e.preventDefault();
  if (e.originalEvent.wheelDelta >= 0) {
    if ($(this).prev().length) {
      var prev = $(this).prev().attr("id");
      document.getElementById(prev).scrollIntoView({ behavior: "smooth" });
    }
  } else {
    if ($(this).next().length) {
      var next = $(this).next().attr("id");
      document.getElementById(next).scrollIntoView({ behavior: "smooth" });
    }
  }
});
*/

//Mobile Navbar Active State
const navbar = document.querySelector(".header__section");
window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav__active");
  } else {
    navbar.classList.remove("nav__active");
  }
};

//Close menu after clicking on links

const mobileLinks = document.querySelectorAll(".nav__link__mobile");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuOpen.classList.toggle("hamburger__active");
  });
});
