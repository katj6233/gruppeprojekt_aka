window.addEventListener("DOMContentLoaded", start);

const links = document.querySelector(".nav_links");

const burger = document.querySelector(".burger");

const li = document.querySelectorAll("li");

function start() {
  burger.addEventListener("click", toggle);
  burger.addEventListener("mouseover", over);
  burger.addEventListener("mouseout", done);
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
