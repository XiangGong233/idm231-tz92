console.log("start yeah yeah")


// ------------------
//     modal part
// -------------------

const modalOpen = document.getElementById('modal-open');
const modalClose = document.getElementById('modal-close');
const modal = document.getElementById('modal');
const main = document.getElementById('main')

const closeModal = function closeModal() {
  fadeout();

  modal.classList.add('layback');
  modalOpen.classList.remove('hidden');
  main.classList.remove('hidden');
  console.log('Modal closed');

  };

const openModal = function openModal() {
  fadein();
  modal.classList.remove('hidden');

  modal.classList.remove('layback');
  modalOpen.classList.add('hidden');
  console.log('Modal opened');

};


modalOpen.addEventListener('click', openModal, false);
modalClose.addEventListener('click', closeModal, false);

// --------------------
//  modal part finish
// ---------------------

// -----------------
// fadein out
// ----------------

// open fadein add fadein modal 
// close fadeout add faeout modal 
// open fadeout add main 
// close fadein 




function fadein() {
  modal.classList.remove('fadeout');
  modal.classList.add('fadein');
  main.classList.add('fadeout');
  main.classList.remove('fadein');
  modalOpen.classList.add('fadeout');
  modalOpen.classList.remove('fadein');

}

function fadeout() {
  modal.classList.remove('fadein');
  modal.classList.add('fadeout');
  main.classList.add('fadein');
  main.classList.remove('fadeout');
  modalOpen.classList.add('fadein');
  modalOpen.classList.remove('fadeout');

}

// ---------------------
// fadeinout
// ----------------------

// ---------------------
// musician information list 
// -----------------------

function classicalMusic(name, music, descriptionM, descriptionI, image, audio) {
    this.name = name;
    this.music = music;
    this.descriptionM = descriptionM;
    this.descriptionI = descriptionI;
    this.image = image;
    this.audio = audio;
    this.showInfor = function() {
      console.log(this.name + ' is the author of ' + this.music + ' and here is the description of this classical music ---- ' + this.description);
    }
  }
  

const mozart01 = new classicalMusic(
  'Wolfgang Amadeus Mozart', 
  'Piano Sonata No. 16 in C major, K. 545 - Sonata facile - 1. Allegro', 
  'Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791), baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the Classical period.',
  'The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as "for beginners", and it is sometimes known by the nickname Sonata facile or Sonata semplice. Mozart added the work to his catalogue on June 26, 1788, the same date as his Symphony No. 39. The exact circumstances of the work\'s composition are not known, however. Although the piece is well-known today, it was not published in Mozart\'s lifetime and first appeared in print in 1805. A typical performance takes about 14 minutes.', 
  'material/image/mozart.jpg', 
  'material/music/mozart.mp3',
  );

const mozart02 = new classicalMusic(
  'Wolfgang Amadeus Mozart', 
  'Piano Sonata No. 11 in A major, K. 331 - Alla Turca - 3. Rondo. Alla Turca. Allegretto', 
  'Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791), baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the Classical period.',
  'The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as "for beginners", and it is sometimes known by the nickname Sonata facile or Sonata semplice. Mozart added the work to his catalogue on June 26, 1788, the same date as his Symphony No. 39. The exact circumstances of the work\'s composition are not known, however. Although the piece is well-known today, it was not published in Mozart\'s lifetime and first appeared in print in 1805. A typical performance takes about 14 minutes.',   
  'material/image/mozart.jpg',
  'material/music/mozart2.mp3'
  );

const beethoven = new classicalMusic(
'Ludwig van Beethoven', 
'Moonlight Sonata -  Piano Sonata No. 14 in C♯ minor', 
'Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791), baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the Classical period.',
  'The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as "for beginners", and it is sometimes known by the nickname Sonata facile or Sonata semplice. Mozart added the work to his catalogue on June 26, 1788, the same date as his Symphony No. 39. The exact circumstances of the work\'s composition are not known, however. Although the piece is well-known today, it was not published in Mozart\'s lifetime and first appeared in print in 1805. A typical performance takes about 14 minutes.', 'material/image/beethoven.jpg',
  'material/music/beethoven.mp3'
);

const liszt01 = new classicalMusic(
  'Franz Liszt', 
  'Grand Paganini Studies, S. 141 - No. 3 Study in G sharp minor. ‘La campanella’', 
  'Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791), baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the Classical period.',
  'The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as "for beginners", and it is sometimes known by the nickname Sonata facile or Sonata semplice. Mozart added the work to his catalogue on June 26, 1788, the same date as his Symphony No. 39. The exact circumstances of the work\'s composition are not known, however. Although the piece is well-known today, it was not published in Mozart\'s lifetime and first appeared in print in 1805. A typical performance takes about 14 minutes.',   
  'material/image/liszt.jpeg',
  'material/music/liszt.mp3'
  );

const liszt02 = new classicalMusic(
  'Franz Liszt', 
  '6 Transcendental Studies after Paganini, S. 140 - No. 6 Theme and Variations', 
  'Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791), baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the Classical period.',
  'The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as "for beginners", and it is sometimes known by the nickname Sonata facile or Sonata semplice. Mozart added the work to his catalogue on June 26, 1788, the same date as his Symphony No. 39. The exact circumstances of the work\'s composition are not known, however. Although the piece is well-known today, it was not published in Mozart\'s lifetime and first appeared in print in 1805. A typical performance takes about 14 minutes.',   
  'material/image/liszt.jpeg',
  'material/music/liszt2.mp3'
  );

const mendelssohn = new classicalMusic(
  'Jakob Ludwig Felix Mendelssohn Bartholdy', 
  'Felix Mendelssohn - Song without words, Op. 62 No. 6 "Spring Song"', 
  'Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791), baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the Classical period.',
  'The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as "for beginners", and it is sometimes known by the nickname Sonata facile or Sonata semplice. Mozart added the work to his catalogue on June 26, 1788, the same date as his Symphony No. 39. The exact circumstances of the work\'s composition are not known, however. Although the piece is well-known today, it was not published in Mozart\'s lifetime and first appeared in print in 1805. A typical performance takes about 14 minutes.',   
  'material/image/mendelson.jpeg',
  'material/music/mendelssohn.mp3'
  );

const chopin = new classicalMusic(
  'Frédéric François Chopin', 
  'Nocturnes, Op. 9 Nocturne No.2 in E flat, Op.9 No.2', 
  'Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791), baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the Classical period.',
  'The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as "for beginners", and it is sometimes known by the nickname Sonata facile or Sonata semplice. Mozart added the work to his catalogue on June 26, 1788, the same date as his Symphony No. 39. The exact circumstances of the work\'s composition are not known, however. Although the piece is well-known today, it was not published in Mozart\'s lifetime and first appeared in print in 1805. A typical performance takes about 14 minutes.',   
  'material/image/chopin.jpg',
  'material/music/chopin.mp3'
  );

const bach = new classicalMusic(
  'Johann Sebastian Bach', 
  'The Well-Tempered Clavier, Book 1, BWV 846-869 - No. 1 Prelude and Fugue in C major, BWV 846', 
  'Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791), baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the Classical period.',
  'The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as "for beginners", and it is sometimes known by the nickname Sonata facile or Sonata semplice. Mozart added the work to his catalogue on June 26, 1788, the same date as his Symphony No. 39. The exact circumstances of the work\'s composition are not known, however. Although the piece is well-known today, it was not published in Mozart\'s lifetime and first appeared in print in 1805. A typical performance takes about 14 minutes.',   
  'material/image/bach.jpg',
  'material/music/bach.mp3'
  ); 

const schumann = new classicalMusic(
  'Robert Alexander Schumann', 
  'Kinderszenen Op.15 No.7, Träumerei', 
  'Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791), baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the Classical period.',
  'The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as "for beginners", and it is sometimes known by the nickname Sonata facile or Sonata semplice. Mozart added the work to his catalogue on June 26, 1788, the same date as his Symphony No. 39. The exact circumstances of the work\'s composition are not known, however. Although the piece is well-known today, it was not published in Mozart\'s lifetime and first appeared in print in 1805. A typical performance takes about 14 minutes.',   
  'material/image/schumann.jpg',
  'material/music/schumann.mp3'
  );

const schubert = new classicalMusic(
  'Franz Seraphicus Peter Schubert', 
  ' Franz Schubert D 957, No. 4 Standchen', 
  'Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791), baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the Classical period.',
  'The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as "for beginners", and it is sometimes known by the nickname Sonata facile or Sonata semplice. Mozart added the work to his catalogue on June 26, 1788, the same date as his Symphony No. 39. The exact circumstances of the work\'s composition are not known, however. Although the piece is well-known today, it was not published in Mozart\'s lifetime and first appeared in print in 1805. A typical performance takes about 14 minutes.',   
  'material/image/schubert.jpg',
  'material/music/schubert.mp3'
  ); 

const satie = new classicalMusic(
  'Éric Alfred Leslie Satie', 
  'Gymnopedies No.1', 
  'Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791), baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the Classical period.',
  'The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as "for beginners", and it is sometimes known by the nickname Sonata facile or Sonata semplice. Mozart added the work to his catalogue on June 26, 1788, the same date as his Symphony No. 39. The exact circumstances of the work\'s composition are not known, however. Although the piece is well-known today, it was not published in Mozart\'s lifetime and first appeared in print in 1805. A typical performance takes about 14 minutes.',   
  'material/image/satie.jpg',
  'material/music/satie.mp3'
  );

const debussy = new classicalMusic(
  'Achille-Claude Debussy', 
  'CLAIR DE LUNE', 
  'Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791), baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the Classical period.',
  'The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as "for beginners", and it is sometimes known by the nickname Sonata facile or Sonata semplice. Mozart added the work to his catalogue on June 26, 1788, the same date as his Symphony No. 39. The exact circumstances of the work\'s composition are not known, however. Although the piece is well-known today, it was not published in Mozart\'s lifetime and first appeared in print in 1805. A typical performance takes about 14 minutes.',   
  'material/image/debussy.jpg',
  'material/music/debussy.mp3'
  );

  var musicianList = [
    mozart01, mozart02, beethoven, liszt01, liszt02, mendelssohn,
    chopin, bach, schumann, schubert, satie, debussy
  ];

  var musicianNameList = [
    'mozart01', 'mozart02', 'beethoven', 'liszt01', 'liszt02', 'mendelssohn',
    'chopin', 'bach', 'schumann', 'schubert', 'satie', 'debussy'
  ];

// ------------------
// claculation
// ------------------


function information() {

    var whichMonth = document.getElementById("month").value;
    console.log(whichMonth);
    var whichDayOfMonth = document.getElementById('day').value;
    console.log(whichDayOfMonth);
  
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
      mozart01;
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
      mozart02;
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
      beethoven;
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
      liszt01;
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
      liszt02;
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
      mendelssohn;
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
      chopin;
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
      bach;
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
      debussy;
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
      schubert;
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
      satie;
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
      schumann; 
    } else if ((whichMonth == 0 && whichDayOfMonth >= 0) || (whichMonth == 0 && whichDayOfMonth <= 0)) {
      alert('Please enter a vaild date!');
    } else if ((whichMonth == 2 && whichDayOfMonth > 29) || (whichMonth == 4 && whichDayOfMonth > 30) || (whichMonth == 6 && whichDayOfMonth > 30) || (whichMonth == 9 && whichDayOfMonth > 30) || (whichMonth == 11 && whichDayOfMonth > 30)) { windows.alart('Please enter a vaild date!'); }


  

  for (let i = 0; i < musicianList.length; i++) {
    console.log(musicianList[i].name);

      const image = document.getElementById('thisimage');
      image.src = musicianList[i].image;
      image.alt = musicianList[i].name;
    
      const name = document.getElementById('thisname');
      name.innerHTML = musicianList[i].name;
    
      const music = document.getElementById('thismusic');
      music.innerHTML = musicianList[i].music;
    
      const audio = document.getElementById('thisaudio');
      audio.src = musicianList[i].audio;
      
      const descriptionM = document.getElementById('thisdescription-m');
      descriptionM.innerHTML = musicianList[i].descriptionM;
    
      const descriptionI = document.getElementById('thisdescription-i');
      descriptionI.innerHTML = musicianList[i].descriptionI;
    }
  }

// document.getElementById(btnbach).onclick = bach;

  // for (let i = 0; i < musicianNameList.length; i++) {
  //   console.log( `btn` + musicianNameList[i]);
  //   document.getElementById(`btn` + musicianNameList[i])
  // }

  for (let i = 0; i < musicianList.length; i++) {
    var testtest = document.getElementById(`btn` + musicianNameList[i]);
  }

console.log(testtest)

  function musicianFlipCard() {
    openinformodal();

      const image = document.getElementById('thisimage');
        image.src = musicianList[i].image;
        image.alt = musicianList[i].name;
      
        const name = document.getElementById('thisname');
        name.innerHTML = musicianList[i].name;
      
        const music = document.getElementById('thismusic');
        music.innerHTML = musicianList[i].music;
      
        const audio = document.getElementById('thisaudio');
        audio.src = musicianList[i].audio;
        
        const descriptionM = document.getElementById('thisdescription-m');
        descriptionM.innerHTML = musicianList[i].descriptionM;
      
        const descriptionI = document.getElementById('thisdescription-i');
        descriptionI.innerHTML = musicianList[i].descriptionI;
    }
  
  


// -------------------------
//   musician page
// -----------------------------

const musician = document.querySelectorAll('.musician');
const inforbox = document.getElementById('infor-box');
const inforcontainer = document.getElementsByClassName('infor-container');
const closeinfor = document.getElementsByClassName('closeinfor');

document.getElementById('listen').onclick = openinformodal;

// const listen = document.getElementsById('listen');
// listen.addEventListener('click', test, false)

function closeinformodal() {
  console.log('close musician information modal');
  inforbox.classList.add('fadeout');
  inforbox.classList.add('layback');
  inforbox.classList.remove('fadein');

  main.classList.remove('layback');
  main.classList.remove('fadeout');
  main.classList.remove('hidden');
  main.classList.add('fadein');

  modalOpen.classList.remove('hidden');
  modalOpen.classList.remove('fadeout');
  modalOpen.classList.add('fadein');
  
  musicPlay.pause(); 

}



function openinformodal() {

  console.log('musician content test');
  console.log('open musician information modal');
  inforbox.classList.remove('hidden');
  inforbox.classList.remove('layback');
  inforbox.classList.remove('fadeout');
  inforbox.classList.add('fadein');

  main.classList.add('fadeout');
  main.classList.add('hidden');
  main.classList.add('layback');
  main.classList.remove('fadein');

  modalOpen.classList.add('hidden');
  modalOpen.classList.add('fadeout');
  modalOpen.classList.remove('fadein');

  modal.classList.add('hidden');
  // modal.classList.add('layback');
  // modal.classList.add('fadeout');
  modal.classList.remove('fadein');
  information();

};

// ----------------
// audio

// music bar and biubiubiu

// https://codepen.io/Wujek_Greg/pen/EpJwaj
// https://stackoverflow.com/questions/20616430/html5-javascript-play-pause-button
// https://www.developphp.com/lib/JavaScript/Audio
// ----------------

var musicPlay = document.getElementById("thisaudio");
// var isPlaying = true;
// musicPlay.volume = 1;
var musicOn = document.getElementById("music-on");

function toPlay() {
  if (musicPlay.paused) {
    musicPlay.currentTime = 0;
    musicPlay.play(); 
    musicOn.innerHTML = 'Music On';
    document.getElementById("music-animation").classList.add('on');
} else {
    musicPlay.pause(); 
    musicOn.innerHTML = 'Music Off';
    document.getElementById("music-animation").classList.remove('on');
  }
};







function test() {
  console.log( 'test test test test test ');
  var whichMonth = document.getElementById("month").value;
  console.log(whichMonth);
  var whichDayOfMonth = document.getElementById('day').value;
  console.log(whichDayOfMonth);
  console.log(musicianList.length);
}




















