//Lytter efter om alt DOM indhold er loaded ind.

window.addEventListener("DOMContentLoaded", start);

//Definerer

const links = document.querySelector(".nav_links");

const burger = document.querySelector(".burger");

const logo = document.querySelector("#logo_img");

const om_knap = document.querySelector("#om_knap");

function start() {
  burger.addEventListener("click", toggle);
  burger.addEventListener("mouseover", over);
  burger.addEventListener("mouseout", done);
  logo.addEventListener("click", forside);
  om_knap.addEventListener("click", omSide);
}
function forside() {
  console.log("forside");
  window.location.replace("index.html");
}

function omSide() {
  console.log("omSide");
  window.location.replace("om_os.html");
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
