// Lytter efter om alt DOM indhold er loaded ind

window.addEventListener("DOMContentLoaded", start);

// Der definerers en række variabler

const links = document.querySelector(".nav_links");

const burger = document.querySelector(".burger");

const logo = document.querySelector("#logo_img");

// Ved den første funktion lyttes der efter henholdsvis click og hover på en række
// elementer.

function start() {
  burger.addEventListener("click", toggle);
  burger.addEventListener("mouseover", over);
  burger.addEventListener("mouseout", done);
  logo.addEventListener("click", forside);
}
// Ved click på logo navigeres der til forside
function forside() {
  console.log("forside");
  window.location.replace("index.html");
}

function toggle() {
  // Der undersøges om burgermenuen indeholder klassen toogle
  console.log(burger.classList.contains("toggle"));

  // Såfremt klassen toogle er på lyttes der efter en hover på burgermenuen
  // Ligeledes hvis klassen ikke er på, så fjernes eventet og der kan ikke hovers
  if (burger.classList.contains("toggle")) {
    burger.addEventListener("mouseover", over);
    document.body.style.overflow = "auto";
  } else {
    burger.removeEventListener("mouseover", over);
    document.body.style.overflow = "hidden";
  }
  // Både nav links samt burgerikonet får tildelt en klasse når der klikkes
  // på dem, og klassen fjernes ligeledes når der klikkes igen
  links.classList.toggle("nav_toggle");
  burger.classList.toggle("toggle");
}

// Disse funktioner tilføjer og fjerner hover klassen, og styres
// af if-sætningerne i toogle funktionen.
function over() {
  console.log("over");
  burger.classList.add("hover");
}

function done() {
  console.log("done");
  burger.classList.remove("hover");
}
