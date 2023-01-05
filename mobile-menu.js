const hambuger = document.querySelector('#hambuger');
const menu = document.querySelector('#mobile-menu');
const closeBtn = document.querySelector('#close-btn');

function display() {
  menu.style.display = 'block';
}

function hide() {
  menu.style.display = 'none';
}

hambuger.addEventListener('click', display);
closeBtn.addEventListener('click', hide);

const about = document.querySelector('#menu-about');
about.addEventListener('click', hide);

const program = document.querySelector('#menu-program');
program.addEventListener('click', hide);

const join = document.querySelector('#menu-join');
join.addEventListener('click', hide);

const sponsor = document.querySelector('#menu-sponsor');
sponsor.addEventListener('click', hide);

const news = document.querySelector('#menu-news');
sponsor.addEventListener('click', hide);

const campaign = document.querySelector('#menu-campaign');
campaign.addEventListener('click', hide);







