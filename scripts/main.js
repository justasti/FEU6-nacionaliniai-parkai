import Kortele from './class.js'

fetch('./scripts/data.json').then(res => res.json()).then(parks => {
  // console.log(parks);
  const allCards = document.querySelector('#allCards');
  parks.forEach(park => {
    const kortele = new Kortele(park.logo, park.pavadinimas, park.plotas, park.ikurimo_data, park.nuotraukos, park.aprasymas, park.isskirtine_verte, park.nuoroda)
    // console.log(kortele);
    allCards.appendChild(kortele);
  });
})