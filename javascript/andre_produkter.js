let alleUre;
let container;
let temp;
let antal = 4;
let tæller = 0;

const url = "https://kea2021-9221.restdb.io/rest/armbaandsure";

const options = {
  headers: {
    "x-apikey": "6139fbde43cedb6d1f97eeee",
  },
};

document.addEventListener("DOMContentLoaded", start);

function start() {
  container = document.querySelector("#lignende_produkter");
  temp = document.querySelector("template");
  // console.log(temp);
  hentdata();
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
    if (ur._id != id) {
      if (tæller < antal) {
        let klon = temp.cloneNode(true).content;
        klon.querySelector("h2").textContent = ur.Navn;
        klon.querySelector(".farve").textContent = ur.Farve;
        klon.querySelector(".pris").textContent = ur.Pris + ",-";
        klon.querySelector("img").src = "images/" + ur.Billede + ".jpg";
        container.appendChild(klon);
        tæller++;
      }
    }
  });
}
