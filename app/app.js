const hamburgerMenu = document.querySelector(".hamburger-menu");
// const hamburgerMenu = $(".hamburger-menu");
const nav = document.querySelector(".nav");
// const nav = $(".nav");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function initListeners() {
  $(".nav a").on("click", function (e) {
    let id = e.currentTarget.id;
    console.log(id);
    $("#app").html(id);
    nav.classList.toggle("active");
  });
  $(".nav").on("click", function (e) {
    nav.classList.remove("active");
  });
}

$(document).ready(function () {
  initListeners();
});
