// Der defineres en række variabler. Blandt andet tæller og antal
// der bruges til at skabe "andre kunder har købt" sektionen.

let alleUre;
let container;
let temp;

let antal = 4;
let tæller = 0;

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

// container og temp defineres

function start() {
  container = document.querySelector("#lignende_produkter");
  temp = document.querySelector("template");
  // console.log(temp);
  hentdata();
}

// Der bliver hentet data via j.son Samtidig skrives arrayet (alleUre) ud i konsollen

async function hentdata() {
  const result = await fetch(url, options);
  alleUre = await result.json();
  console.log(alleUre);
  visUre();
}

// Der laves et forEach loop for hvert ur, som bliver klonet.
// Samtidig laves der nogle if sætninger der begrænser antallet af
// af ure der bliver hentet ind, samt at det ur der er klikket på ikke
// dukker op.

function visUre() {
  container.textContent = "";
  alleUre.forEach((ur) => {
    if (ur._id != id) {
      if (tæller < antal) {
        let klon = temp.cloneNode(true).content;
        klon.querySelector("h2").textContent = ur.Navn;
        klon.querySelector(".farve").textContent = ur.Farve;
        klon.querySelector(".pris").textContent = ur.Pris + ",-";
        klon.querySelector("img").src = "images/" + ur.Billede + ".webp";
        container.appendChild(klon);
        tæller++;
      }
    }
  });
}
