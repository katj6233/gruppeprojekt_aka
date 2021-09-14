// Der defineres en række variabler
let alleUre;
let container;
let temp;
let filter = "alle";
const header = document.querySelector("h1");

// Url'en samt x-apikey defineres, hvilket gør os i stand i at hente den pågældende
// data fra resteb

const url = "https://kea2021-9221.restdb.io/rest/armbaandsure";

const options = {
  headers: {
    "x-apikey": "6139fbde43cedb6d1f97eeee",
  },
};
// Lytter efter om alt DOM indhold er loaded ind

document.addEventListener("DOMContentLoaded", start);

function start() {
  const filterKnapper = document.querySelectorAll("nav button");
  // Ved tryk på en af filterknapperne laves et forEach loop hvilket
  // sendes videre til funktionen filtrerUre
  filterKnapper.forEach((knap) => knap.addEventListener("click", filtrerUre));

  // container og temp defineres

  container = document.querySelector("section");
  temp = document.querySelector("template");
  hentdata();
}
// I denne funktion filtreres på den pågældende farve. Samtidig skifter klassen
// .valgt til den kna som er trykket på, h1 skifter textcontent så den passer
// til den pågældende katagori.
function filtrerUre() {
  filter = this.dataset.farve;
  document.querySelector(".valgt").classList.remove("valgt");
  this.classList.add("valgt");
  visUre();
  header.textContent = this.textContent;
}
// Der bliver hentet data via j.son Samtidig skrives arrayet (alleUre) ud i konsollen

async function hentdata() {
  const result = await fetch(url, options);
  alleUre = await result.json();
  console.log(alleUre);
  visUre();
}

// Der laves et forEach loop for hvert ur, som bliver klonet.
// Derudover bliver der filtreret for alle ure.
// Data fyldes ud.

function visUre() {
  container.textContent = "";
  alleUre.forEach((ur) => {
    if (filter == ur.Farve || filter == "alle") {
      let klon = temp.cloneNode(true).content;
      klon.querySelector("img").src = "images/" + ur.Billede + ".webp";
      klon.querySelector(".navn").textContent = ur.Navn;
      klon.querySelector(".farve").textContent = ur.Farve;
      klon.querySelector(".pris").textContent = ur.Pris + ",-";
      klon.querySelector("article").addEventListener("click", () => {
        location.href = "produkter_detaljer.html?id=" + ur._id;
      });

      container.appendChild(klon);
    }
  });
}
