"use strict";

const btnMenu = document.querySelector(".menu-toggler");
const nav = document.querySelector("nav");
const icons = document.querySelector(".icon-wrapper");
const iconBi = document.querySelector(".bi-list");

btnMenu.addEventListener("click", function () {
  nav.classList.toggle("show");
  icons.classList.toggle("show");
  btnMenu.classList.toggle("rotate");
});
