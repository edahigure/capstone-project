const speakersInfo = [
  {
    name: 'Edahi Antonio Gutiérrez Reyes',
    affiliation: 'Currently Studying web programing at Microverse',
    bio: 'Expert in effective electrical properties of composite materials as well as scatering theories of light propagation',
    photo: './images/photo_1.png',
  },
  {
    name: 'Ruben Barrera Pérez',
    affiliation: 'Instituto de Física UNAM',
    bio: 'Emeritus profesor working in electromagnetic theory',
    photo: './images/photo_2.png',
  },
  {
    name: 'Augusto García Valenzuela',
    affiliation: 'Instituto de Ciencias Aplicadas y tecnología',
    bio: 'Expert in multiple scattering theories and effective properties in inhomogeneous media.',
    photo: './images/photo_3.png',
  },
  {
    name: 'Crescencio García Segundo',
    affiliation: 'Instituto de Ciencias Aplicadas y tecnología',
    bio: 'Expert in photoacoustics and termoelasticity',
    photo: './images/photo_4.png',
  },
  {
    name: 'Felipe Pérez Rodriguez',
    affiliation: 'Benemerita Universidad Autónoma de Puebla',
    bio: 'Expert in effective properties of metamaterias',
    photo: './images/photo_5.png',
  },
  {
    name: 'Luis Mochin Backal',
    affiliation: 'Universidad Autonoma de Morelos',
    bio: 'Expert in electromagetic theory',
    photo: './images/photo_6.png',
  },
];

const speakersSection = document.querySelector('.speakers');

let bigString = '';

for (let i = 0; i < 2; i += 1) {
  bigString += `
  
  <div class="wrapper-speaker">      
    <div class="item-1"><img class="photo"  src="${speakersInfo[i].photo}">      </div> 
    <div class="item-2">
      <div class="name"> ${speakersInfo[i].name} </div>
      <div class="affiliation"> ${speakersInfo[i].affiliation} </div>
      <div class="bio"> ${speakersInfo[i].bio} </div>
    </div>
  </div>  
  `;
}

speakersSection.innerHTML = bigString;

const speakersBis = document.querySelector('.speakers-bis');
  let bigString2 = '';
  for (let i = 2; i < speakersInfo.length; i += 1) {
    bigString2 += `
    
    <div class="wrapper-speaker">      
      <div class="item-1"><img class="photo"  src="${speakersInfo[i].photo}">      </div> 
      <div class="item-2">
        <div class="name"> ${speakersInfo[i].name} </div>
        <div class="affiliation"> ${speakersInfo[i].affiliation} </div>
        <div class="bio"> ${speakersInfo[i].bio} </div>
      </div>
    </div>    
    `;
  }
  speakersBis.innerHTML = bigString2;
  

const moreIcon = document.querySelector('#more-icon');

function display() {
  const speakersBis = document.querySelector('.speakers-bis');
  let bigString2 = '';
  for (let i = 2; i < speakersInfo.length; i += 1) {
    bigString2 += `
    
    <div class="wrapper-speaker">      
      <div class="item-1"><img class="photo"  src="${speakersInfo[i].photo}">      </div> 
      <div class="item-2">
        <div class="name"> ${speakersInfo[i].name} </div>
        <div class="affiliation"> ${speakersInfo[i].affiliation} </div>
        <div class="bio"> ${speakersInfo[i].bio} </div>
      </div>
    </div>    
    `;
  }
  speakersBis.innerHTML = bigString2;
  speakersBis.style.display = 'grid';
  const more = document.querySelector('.more');
  more.style.display = 'none';
  const less = document.querySelector('.less');
  less.style.display = 'flex';
}

moreIcon.addEventListener('click', display);

const lessIcon = document.querySelector('#less-icon');

function hide() {
  const speakersBis = document.querySelector('.speakers-bis');
  speakersBis.style.display = 'none';
  const less = document.querySelector('.less');
  less.style.display = 'none';
  const more = document.querySelector('.more');
  more.style.display = 'flex';
}

lessIcon.addEventListener('click', hide);