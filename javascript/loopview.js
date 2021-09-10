let alleUre;
let container;
let temp;
let filter = "alle";
const header = document.querySelector("h1");

const url = "https://kea2021-9221.restdb.io/rest/armbaandsure";

const options = {
  headers: {
    "x-apikey": "6139fbde43cedb6d1f97eeee",
  },
};

document.addEventListener("DOMContentLoaded", start);

function start() {
  const filterKnapper = document.querySelectorAll("nav button");
  filterKnapper.forEach((knap) => knap.addEventListener("click", filtrerUre));
  container = document.querySelector("section");
  temp = document.querySelector("template");
  // console.log(temp);
  hentdata();
}

function filtrerUre() {
  filter = this.dataset.farve;
  // document.querySelector(".valgt").classList.remove("valgt");
  // this.classList.add("valgt");
  visUre();
  header.textContent = this.textContent;
}

async function hentdata() {
  const result = await fetch(url, options);
  alleUre = await result.json();
  console.log(alleUre);
  visUre();
}

function visUre() {
  container.textContent = "";
  alleUre.forEach((ur) => {
    if (filter == ur.Farve || filter == "alle") {
      let klon = temp.cloneNode(true).content;
      klon.querySelector("img").src = "images/" + ur.Billede + ".jpg";
      klon.querySelector(".navn").textContent = ur.Navn;
      klon.querySelector(".farve").textContent = ur.Farve;
      klon.querySelector(".pris").textContent = ur.Pris;
      klon.querySelector("article").addEventListener("click", () => {
        location.href = "produkter_detaljer.html?id=" + ur._id;
      });

      container.appendChild(klon);
    }
  });
}
