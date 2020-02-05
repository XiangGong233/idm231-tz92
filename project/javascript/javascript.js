console.log("start yeah yeah")

// Begin considering functions, methods and objects that can be part of your final project.

function playSound() {
  // Play a sound based on the `selected_sign`
}

// var signs = {
//     'details': [
//       'name': 'Tarus',
//       'image': 'bull.jpg'
//     ]
//   }

const day = document.querySelectorAll('.day option');
const month = document.querySelectorAll('.month option');

console.log(day)

// varabile 

function classicalMusic(name, music, description, image) {
    this.name = name;
    this.music = music;
    this.description = description;
    this.image = image;
  }
  

//   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus laboriosam illum a expedita magni at, voluptas ratione deleniti quo qui soluta nam aliquid molestias omnis saepe consequatur doloremque nulla libero.'
  
const mozart01 = new classicalMusic('Wolfgang Amadeus Mozart', 'Piano Sonata No. 16 in C major, K. 545 - Sonata facile - 1. Allegro', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', 'material/image/mozart.jpg.src = URL');

const mozart02 = new classicalMusic('Wolfgang Amadeus Mozart', 'Piano Sonata No. 11 in A major, K. 331 - Alla Turca - 3. Rondo. Alla Turca. Allegretto', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ');

const beethoven = new classicalMusic('Ludwig van Beethoven', 'Moonlight Sonata -  Piano Sonata No. 14 in C♯ minor', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.');

const Liszt01 = new classicalMusic('Liszt Ferenc', 'Grand Paganini Studies, S. 141 - No. 3 Study in G sharp minor. ‘La campanella’', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.');

const Liszt02 = new classicalMusic('Liszt Feren', '6 Transcendental Studies after Paganini, S. 140 - No. 6 Theme and Variations', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.');

const Mendelssohn = new classicalMusic('Jakob Ludwig Felix Mendelssohn Bartholdy', 'Felix Mendelssohn - Song without words, Op. 62 No. 6 "Spring Song"', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.');

const chopin = new classicalMusic('Frédéric François Chopin', 'Nocturnes, Op. 9 Nocturne No.2 in E flat, Op.9 No.2', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.');

const Bach = new classicalMusic('Johann Sebastian Bach', 'The Well-Tempered Clavier, Book 1, BWV 846-869 - No. 1 Prelude and Fugue in C major, BWV 846', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'); 

const schumann = new classicalMusic('Robert Alexander Schumann', 'Kinderszenen Op.15 No.7, Träumerei', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.');

const schubert = new classicalMusic('Franz Seraphicus Peter Schubert', ' Franz Schubert D 957, No. 4 Standchen', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'); 

const satie = new classicalMusic('Éric Alfred Leslie Satie', 'Gymnopedies No.1', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.');

const debussy = new classicalMusic('Achille-Claude Debussy', 'CLAIR DE LUNE', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.');

// const newclassicalMusic = 

console.log(mozart01)

// const classicalMusicLength = classicalMusic.length

// for (let i = 0; i < classicalMusicLength; i++) {
//     console.log(i);
//   }


  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "mozart01";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "mozart02";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "beethoven";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Liszt01";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Liszt02";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Mendelssohn";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "chopin";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Bach";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "schumann";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "schubert";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "satie";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "debussy";
  }







