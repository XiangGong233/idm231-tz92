console.log("start yeah yeah")

// ------------------
//     modal part
// -------------------

const modalOpen = document.getElementById('modal-open');
const modalClose = document.getElementById('modal-close');
const modal = document.getElementById('modal');
const main = document.getElementById('main')

const closeModal = function closeModal() {
  modal.classList.add('hidden');
  modalOpen.classList.remove('hidden');
  main.classList.remove('hidden');
  };

const openModal = function openModal() {
modal.classList.remove('hidden');
modalOpen.classList.add('hidden');
};


modalOpen.addEventListener('click', openModal, false);
modalClose.addEventListener('click', closeModal, false);

// --------------------
//  modal part finish
// ---------------------





function classicalMusic(name, music, description, image, sound) {
    this.name = name;
    this.music = music;
    this.description = description;
    this.image = image;
    this.sound = `${name}.mp3`;
  


  }


  
const mozart01 = new classicalMusic(
  'Wolfgang Amadeus Mozart', 
  'Piano Sonata No. 16 in C major, K. 545 - Sonata facile - 1. Allegro', 
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 
  'material/image/mozart.jpg.src = URL', 
  'material/music/mozart.mp3'
  );

const mozart02 = new classicalMusic(
  'Wolfgang Amadeus Mozart', 
  'Piano Sonata No. 11 in A major, K. 331 - Alla Turca - 3. Rondo. Alla Turca. Allegretto', 
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  'material/image/mozart.jpg.src = URL',
  'material/music/mozart2.mp3'
  );

const beethoven = new classicalMusic(
'Ludwig van Beethoven', 
'Moonlight Sonata -  Piano Sonata No. 14 in C♯ minor', 
'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
'material/image/beethoven.jpg',
'material/music/beethoven.mp3'
);

const liszt01 = new classicalMusic(
  'Liszt Ferenc', 
  'Grand Paganini Studies, S. 141 - No. 3 Study in G sharp minor. ‘La campanella’', 
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  'material/image/liszt.jpeg',
  'material/music/liszt.mp3'
  );

const liszt02 = new classicalMusic(
  'Liszt Feren', 
  '6 Transcendental Studies after Paganini, S. 140 - No. 6 Theme and Variations', 
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  'material/image/liszt.jpeg',
  'material/music/liszt2.mp3'
  );

const mendelssohn = new classicalMusic(
  'Jakob Ludwig Felix Mendelssohn Bartholdy', 
  'Felix Mendelssohn - Song without words, Op. 62 No. 6 "Spring Song"', 
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  'material/image/mendelson.jpeg',
  'material/music/mendelssohn.mp3'
  );

const chopin = new classicalMusic(
  'Frédéric François Chopin', 
  'Nocturnes, Op. 9 Nocturne No.2 in E flat, Op.9 No.2', 
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  'material/image/chopin.jpg',
  'material/music/chopin.mp3'
  );

const bach = new classicalMusic(
  'Johann Sebastian Bach', 
  'The Well-Tempered Clavier, Book 1, BWV 846-869 - No. 1 Prelude and Fugue in C major, BWV 846', 
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  'material/image/bach.jpg',
  'material/music/bach.mp3'
  ); 

const schumann = new classicalMusic(
  'Robert Alexander Schumann', 
  'Kinderszenen Op.15 No.7, Träumerei', 
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  'material/image/schumann.jpg',
  'material/music/schumann.mp3'
  );

const schubert = new classicalMusic(
  'Franz Seraphicus Peter Schubert', 
  ' Franz Schubert D 957, No. 4 Standchen', 
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  'material/image/schubert.jpg',
  'material/music/schubert.mp3'
  ); 

const satie = new classicalMusic(
  'Éric Alfred Leslie Satie', 
  'Gymnopedies No.1', 
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  'material/image/satie.jpg',
  'material/music/satie.mp3'
  );

const debussy = new classicalMusic(
  'Achille-Claude Debussy', 
  'CLAIR DE LUNE', 
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  'material/image/debussy.jpg',
  'material/music/debussy.mp3'
  );









// -------------------------
//   musician button
// -----------------------------


function creaeInfor() {
  // const aaaaa = document.createElement('div')

  const image = document.createElement("img");
  image.src = classicalMusic.image;
  image.alt = `${classicalMusic.name}`;

  const paragraph = document.createElement("p");
  paragraph.innerHTML = classicalMusic.name;
  
  const button = document.createElement("button");
  button.id = `${classicalMusic.name}`;
  button.classList.add("musician-name");

  

  button.appendChild(image);
  button.appendChild(paragraph);

  return createInfor;
};





// -----------------
// calculation
// ----------------



const birthdayMonth = document.getElementsByClassName("month");
const whichMonth = birthdayMonth.value;

const birthdayDay = document.getElementsByClassName('day');
const whichDayOfMonth = birthdayDay.value;



function test() {
  console.log( birthdayMonth.value);
}


function calculate() {

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "mozart01";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "mozart02";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "beethoven";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "liszt01";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "liszt02";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "mendelssohn";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "chopin";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "bach";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "schumann";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "schubert";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "satie";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "debussy";
  }


}

// const listen = document.getElementsById('listen');

// listen.addEventListener('click', test, false)

document.getElementById('listen').onclick = test;

// --------------------------------------------
//   ul hidden and musician card show up
// --------------------------------------------

const musicianList = [
  mozart01,
  mozart02,
  beethoven,
  liszt01,
  liszt02,
  mendelssohn,
  chopin,
  bach,
  schumann,
  schubert,
  satie,
  debussy
];

const musician = document.querySelectorAll('.musician');
const musicianContent = document.querySelectorAll('.musician-content');

const background = document.getElementsByClassName('all');


function createCard() {
  musician.classList.add('hidden');




}













