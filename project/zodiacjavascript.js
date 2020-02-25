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

function classicalMusic(name, music, description, image, sound) {
    this.name = name;
    this.music = music;
    this.description = description;
    this.image = image;
    this.sound = sound;
    this.showInfor = function() {
      console.log(this.name + ' is the author of ' + this.music + ' and here is the description of this classical music ---- ' + this.description);
    }
  }
  

const mozart01 = new classicalMusic(
  'Wolfgang Amadeus Mozart', 
  'Piano Sonata No. 16 in C major, K. 545 - Sonata facile - 1. Allegro', 
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 
  'material/image/mozart.jpg', 
  'material/music/mozart.mp3',
  );

const mozart02 = new classicalMusic(
  'Wolfgang Amadeus Mozart', 
  'Piano Sonata No. 11 in A major, K. 331 - Alla Turca - 3. Rondo. Alla Turca. Allegretto', 
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  'material/image/mozart.jpg',
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

  const musicianList = [
    mozart01, mozart02, beethoven, liszt01, liszt02, mendelssohn,
    chopin, bach, schumann, schubert, satie, debussy
  ];


//   function getClassName() {
//     // let i = 0;
    
//     // while (musicianList[i]) {
//     //   console.log(musicianList[i]);
//     //   musicianList[i].showInfor();

//     //   i++;
//     // }

// for (let i = 0; i < musicianList.length; i++) {
//       console.log(musicianList[i]);
//       musicianList[i].showInfor();

//       i++;
//     }
//   }

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
      schumann;
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
      schubert;
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
      satie;
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
      debussy;
    }
  

  for (let i = 0; i < musicianList.length; i++) {
    console.log([i]);

      const image = document.getElementById('thisimage');
      image.src = musicianList[i].image;
      image.alt = musicianList[i].name;
    
      const name = document.getElementById('thisname');
      name.innerHTML = musicianList[i].name;
    
      const music = document.getElementById('thismusic');
      music.innerHTML = musicianList[i].music;
    
      const sound = document.getElementById('thissound');
      sound.src = musicianList[i].sound;
      
      const description = document.getElementById('thisdescription');
      description.innerHTML = musicianList[i].description;
    
    }

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
// sound
// -----------------
const playMusic = musicianMusic => {
  musicianMusic.play();
}







 function test() {
  console.log( 'test test test test test ');
  var whichMonth = document.getElementById("month").value;
  console.log(whichMonth);
  var whichDayOfMonth = document.getElementById('day').value;
  console.log(whichDayOfMonth);
  console.log(musicianList.length);
}



// -----------------
// https://codepen.io/Wujek_Greg/pen/EpJwaj
// ----------------



// var whichMonth = document.getElementById("month").value;
// var whichDayOfMonth = document.getElementById('day').value;

var musicPlay = document.getElementById("thismusic");
var isPlaying = true;
musicPlay.volume = 1;

function toPlay() {
  if (isPlaying) {
    musicPlay.play()
  } else {
    musicPlay.pause();
  }
};

musicPlay.onplaying = function() {
  isPlaying = true;
  document.getElementById("music-animation").classList.add('on')
};

musicPlay.onpause = function() {
  isPlaying = false;
  document.getElementById("music-animation").classList.remove('on')
};

var musicOn = document.getElementById("toggle");
musicOn.addEventListener('click', function() {
  if (musicOn.innerHTML = 'Music off') {
    musicOn.innerHTML = 'Music on';
  } else { if (musicOn.innerHTML = 'Music on') {
    musicOn.innerHTML = 'Music off';
    }
  }
}, false);



























