window.addEventListener("DOMContentLoaded", start);

const links = document.querySelector(".nav_links");

const burger = document.querySelector(".burger");

const logo = document.querySelector("#logo_img");

function start() {
  burger.addEventListener("click", toggle);
  burger.addEventListener("mouseover", over);
  burger.addEventListener("mouseout", done);
  logo.addEventListener("click", forside);
}
function forside() {
  console.log("forside");
  window.location.replace("index.html");
}

function toggle() {
  console.log(burger.classList.contains("toggle"));

  if (burger.classList.contains("toggle")) {
    burger.addEventListener("mouseover", over);
  } else {
    burger.removeEventListener("mouseover", over);
  }
  links.classList.toggle("nav_toggle");
  burger.classList.toggle("toggle");
}

function over() {
  console.log("over");
  burger.classList.add("hover");
}
function done() {
  console.log("done");
  burger.classList.remove("hover");
}
