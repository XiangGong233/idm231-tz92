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
  'Piano Sonata No. 16 in C major', 
  'Wolfgang Amadeus Mozart, baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart, was a prolific and influential composer of the Classical period.',
  'The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as "for beginners", and it is sometimes known by the nickname Sonata facile or Sonata semplice. Mozart added the work to his catalogue on June 26, 1788, the same date as his Symphony No. 39. The exact circumstances of the work\'s composition are not known, however. Although the piece is well-known today, it was not published in Mozart\'s lifetime and first appeared in print in 1805. A typical performance takes about 14 minutes.', 
  'material/image/mozart.jpg', 
  'material/music/mozart.mp3',
  );

const brahms = new classicalMusic(
  'Johannes Brahms', 
  'Piano Sonata No. 11 in A major', 
  'Johannes Brahms was a German composer, pianist, and conductor of the Romantic period. Brahms reputation and status as a composer are such that he is sometimes grouped with Johann Sebastian Bach and Ludwig van Beethoven as one of the "Three Bs" of music.',
  'The Hungarian Dances by Johannes Brahms (WoO 1), are a set of 21 lively dance tunes based mostly on Hungarian themes, completed in 1879. Each dance has been arranged for a wide variety of instruments and ensembles. The better-known Hungarian Dances include Nos. 1 and 5, the latter of which was based on the csárdás "Bártfai emlék" (Memories of Bártfa) by Hungarian composer Béla Kéler, which Brahms mistakenly thought was a traditional folksong. ',   
  'material/image/brahms.jpg',
  'material/music/brahms.mp3'
  );

const beethoven = new classicalMusic(
'Ludwig van Beethoven', 
'Moonlight Sonata', 
'Ludwig van Beethoven was a German composer and pianist. He was a crucial figure in the transition between the classical and romantic eras in classical music and is considered to be one of the greatest composers of all time.',
  'The name "Moonlight Sonata" comes from remarks made by the German music critic and poet Ludwig Rellstab. In 1832, five years after Beethoven\'s death, Rellstab likened the effect of the first movement to that of moonlight shining upon Lake Lucerne. Within ten years, the name "Moonlight Sonata" ("Mondscheinsonate" in German) was being used in German and English publications. Later in the nineteenth century, the sonata was universally known by that name.', 
  'material/image/beethoven.jpg',
  'material/music/beethoven.mp3'
);

const liszt = new classicalMusic(
  'Franz Liszt', 
  'No. 3 in G-Sharp Minor, "La campanella"', 
  'Franz Liszt was a Hungarian composer, virtuoso pianist, conductor, music teacher, arranger, and organist of the Romantic era. He was also a writer, a philanthropist, a Hungarian nationalist, and a Franciscan tertiary.',
  'The Grandes études de Paganini, S. 141, are a series of six études for the piano by Franz Liszt, revised in 1851 from an earlier version (published as Études d\'exécution transcendante d\'après Paganini, S. 140, in 1838). It is almost exclusively in the final version that these pieces are played today. The pieces are all based on the compositions of Niccolò Paganini for violin, and are among the most technically demanding pieces in the piano literature. The pieces run the gamut of technical hurdles, and frequently require very large stretches by the performer of an eleventh.',   
  'material/image/liszt.jpeg',
  'material/music/liszt.mp3'
  );

const rachmaninoff  = new classicalMusic(
  'Sergei Rachmaninoff', 
  'Prelude Op.23 No.5 in G minor', 
  'Sergei Vasilyevich Rachmaninoff was a Russian composer, virtuoso pianist, and conductor of the late Romantic period. In his works, later giving way to a personal style notable for song-like melodicism, expressiveness and rich orchestral colors.',
  'Prelude in G minor, Op. 23, No. 5, is a piece of music by Sergei Rachmaninoff, completed in 1901. It was included in his Opus 23 set of ten preludes, despite having been written two years earlier than the other nine. Rachmaninoff himself premiered the piece in Moscow on February 10, 1903, along with Preludes No. 1 and 2 from Op. 23.',   
  'material/image/rachmaninoff.jpg',
  'material/music/rachmaninoff.mp3'
  );

const mendelssohn = new classicalMusic(
  'Felix Mendelssohn', 
  'Song without words, Op. 62 No. 6 "Spring Song"', 
  'Jakob Ludwig Felix Mendelssohn Bartholdy, born and widely known as Felix Mendelssohn, was a German composer, pianist, organist and conductor of the early Romantic period. ',
  'The eight volumes of Songs Without Words, each consisting of six "songs" (Lieder), were written at various points throughout Mendelssohn\'s life, and were published separately. The piano became increasingly popular in Europe during the early nineteenth century, when it became a standard item in many middle-class households. The pieces are within the grasp of pianists of various abilities and this undoubtedly contributed to their popularity. This great popularity has caused many critics to under-rate their musical value.',   
  'material/image/mendelson.jpeg',
  'material/music/mendelssohn.mp3'
  );

const chopin = new classicalMusic(
  'Frédéric François Chopin', 
  'Nocturnes Op. 9 No.2', 
  'Frédéric François Chopin was a Polish composer and virtuoso pianist of the Romantic era who wrote primarily for solo piano. He has maintained worldwide renown as a leading musician of his era.',
  'The Nocturnes, Op. 9 are a set of three nocturnes written by Frédéric Chopin between 1830 and 1832, published that year, and dedicated to Madame Marie Pleyel. The second nocturne of the work is regarded as Chopin\'s most famous piece.This nocturne has a rhythmic freedom that came to characterise Chopin\'s later work. The left hand has an unbroken sequence of eighth notes in simple arpeggios throughout the entire piece, while the right hand moves with freedom in patterns of seven, eleven, twenty, and twenty-two notes.',   
  'material/image/chopin.jpg',
  'material/music/chopin.mp3'
  );

const bach = new classicalMusic(
  'Johann Sebastian Bach', 
  'The Well-Tempered Clavier, Book 1', 
  'Johann Sebastian Bach was a German composer and musician of the Baroque period. Since the 19th-century Bach Revival he has generally been regarded as one of the greatest composers of all time.',
  'The Well-Tempered Clavier, BWV 846–893, is a collection of two sets of preludes and fugues in all 24 major and minor keys, composed for solo keyboard by Johann Sebastian Bach. The modern German spelling for the collection is Das wohltemperierte Klavier. Bach gave the title Das Wohltemperirte Clavier to a book of preludes and fugues in all 24 major and minor keys, dated 1722, composed "for the profit and use of musical youth desirous of learning, and especially for the pastime of those already skilled in this study". ',   
  'material/image/bach.jpg',
  'material/music/bach.mp3'
  ); 

const schumann = new classicalMusic(
  'Robert Alexander Schumann', 
  'Kinderszenen Op.15 No.7, Träumerei', 
  'Robert Schumann was a German composer, pianist, and influential music critic. He is widely regarded as one of the greatest composers of the Romantic era. Schumann left the study of law, intending to pursue a career as a virtuoso pianist. ',
  'Schumann wrote 30 movements for this work but chose 13 for the final version. The unused movements were later published in Bunte Blätter, Op. 99, and Albumblätter, Op. 124. Schumann initially intended to publish Kinderszenen together with Novelletten (Opus 21); the shared literary theme is suggested by the original title Kindergeschichten (Children\s Tales). He described them in 1840 as "more cheerful, gentler, more melodic" than his earlier works.',   
  'material/image/schumann.jpg',
  'material/music/schumann.mp3'
  );

const schubert = new classicalMusic(
  'Franz Peter Schubert', 
  'D 957, No. 4 Standchen', 
  'Franz Peter Schubert was an Austrian composer of the late Classical and early Romantic eras. Despite his short lifetime, Schubert left behind a vast oeuvre, including more than 600 secular vocal works and a large body of piano music.',
  'Schwanengesang, D 957, is a collection of songs written by Franz Schubert at the end of his life and published posthumously. The collection was named by its first publisher Tobias Haslinger, presumably wishing to present it as Schubert\'s final musical testament to the world. All the song titles are by Schubert, as Heine did not give names to the poems. (Reed 259) Tobias Haslinger, Schubert\'s publisher, collected the songs together as a cycle, most possibly for financial reasons, as Die schöne Müllerin and Die Winterreise collections sold very well. "Die Taubenpost" is considered to be Schubert\'s last Lied.',   
  'material/image/youngschubet.jpg',
  'material/music/schubert.mp3'
  ); 

const satie = new classicalMusic(
  'Éric Satie', 
  'Gymnopedies No.1', 
  'Éric Alfred Leslie Satie, who signed his name Erik Satie after 1884, was a French composer and pianist. Satie was an influential artist in the late 19th- and early 20th-century Parisian avant-garde. ',
  'The Gymnopédies or Trois Gymnopédies, published in Paris starting in 1888, are three piano compositions written by French composer and pianist Erik Satie. From the second half of the 20th century on, the Gymnopédies were often erroneously described as part of Satie\'s body of furniture music, perhaps because of John Cage\'s interpretation of them. Collectively, the Gymnopédies are regarded as an important precursor to modern ambient music.',   
  'material/image/satie.jpg',
  'material/music/satie.mp3'
  );

const debussy = new classicalMusic(
  'Achille-Claude Debussy', 
  'CLAIR DE LUNE', 
  '(Achille) Claude Debussy was a French composer. He is sometimes seen as the first Impressionist composer, although he vigorously rejected the term. He was among the most influential composers of the late 19th and early 20th centuries.',
  'The third and most famous movement of Suite bergamasque is "Clair de lune", in D♭ major. Its name comes from Verlaines poem "Clair de lune", which means "moonlight" in French. It is written in 9/8 meter, marked andante très expressif, and to be played mostly pianissimo. It is not to be confused with the two settings of the poem made by Debussy for voice and piano accompaniment.',   
  'material/image/debussy.jpg',
  'material/music/debussy.mp3'
  );

  var musicianList = [
    mozart01, brahms, beethoven, liszt, rachmaninoff , mendelssohn,
    chopin, bach, schumann, schubert, satie, debussy
  ];
  
  var musicianNameList = [
    'mozart01', 'brahms', 'beethoven', 'liszt', 'rachmaninoff', 'mendelssohn',
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
      openinformodal();
      AstroSign = mozart01;
    } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
      openinformodal();
      AstroSign = mendelssohn;
    } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
      openinformodal();
      AstroSign = beethoven;
    } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
      openinformodal();
      AstroSign = liszt;
    } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
      openinformodal();
      AstroSign = rachmaninoff ;
    } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
      openinformodal();
      AstroSign = brahms;
    } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
      openinformodal();
      AstroSign = chopin;
    } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
      openinformodal();
      AstroSign = bach;
    } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
      openinformodal();
      AstroSign = debussy;
    } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
      openinformodal();
      AstroSign = schubert;
    } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
      openinformodal();
      AstroSign = satie;
    } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
      openinformodal();
      AstroSign = schumann; 
    } else if ((whichMonth == 0 && whichDayOfMonth >= 0) || (whichMonth == 0 && whichDayOfMonth <= 0)) {
      alert('Please enter a vaild date!');
    } else if ((whichMonth == 2 && whichDayOfMonth > 29) || (whichMonth == 4 && whichDayOfMonth > 30) || (whichMonth == 6 && whichDayOfMonth > 30) || (whichMonth == 9 && whichDayOfMonth > 30) || (whichMonth == 11 && whichDayOfMonth > 30)) { alart('Please enter a vaild date!'); }

    AstroSignName();   
    console.log(AstroSign.name) 
  }

function AstroSignName() {
  const image = document.getElementById('thisimage');
  image.src = AstroSign.image;
  image.alt = AstroSign.name;

  const name = document.getElementById('thisname');
  name.innerHTML = AstroSign.name;

  const music = document.getElementById('thismusic');
  music.innerHTML = AstroSign.music;

  const audio = document.getElementById('thisaudio');
  audio.src = AstroSign.audio;
  
  const descriptionM = document.getElementById('thisdescription-m');
  descriptionM.innerHTML = AstroSign.descriptionM;

  const descriptionI = document.getElementById('thisdescription-i');
  descriptionI.innerHTML = AstroSign.descriptionI;
}

function AstroSignName02(AstroSign) {
  const image = document.getElementById('thisimage');
  image.src = AstroSign.image;
  image.alt = AstroSign.name;

  const name = document.getElementById('thisname');
  name.innerHTML = AstroSign.name;

  const music = document.getElementById('thismusic');
  music.innerHTML = AstroSign.music;

  const audio = document.getElementById('thisaudio');
  audio.src = AstroSign.audio;
  
  const descriptionM = document.getElementById('thisdescription-m');
  descriptionM.innerHTML = AstroSign.descriptionM;

  const descriptionI = document.getElementById('thisdescription-i');
  descriptionI.innerHTML = AstroSign.descriptionI;
}

const musicBtn = document.querySelectorAll('.musicbtn');

function musicianFlipCard() {

  // if (musicBtn.id = 'btnbach') {
  //   AstroSign = bach;
  //   openinformodal();
  //   console.log(AstroSign);

  // } else if (musicBtn.id = 'btnbeethoven'){
  //   AstroSign = beethoven;
  //   openinformodal();
  //   console.log(AstroSign);

  // } else if (musicBtn.id = 'btnchopin'){
  //   AstroSign = chopin;
  //   openinformodal();
  //   console.log(AstroSign);

  // } else if (musicBtn.id = 'btndebussy'){
  //   AstroSign = debussy;
  //   openinformodal();
  //   console.log(AstroSign);

  // } else if (musicBtn.id = 'btnliszr01'){
  //   AstroSign = liszt;
  //   openinformodal();
  // } else if (musicBtn.id = 'btnmendlson'){
  //   AstroSign = mendelssohn;
  //   openinformodal();
  // } else if (musicBtn.id = 'btnmozart01'){
  //   AstroSign = brahms;
  //   openinformodal();
  // } else if (musicBtn.id = 'btnsatie'){
  //   AstroSign = satie;
  //   openinformodal();
  // } else if (musicBtn.id = 'btnschubert'){
  //   AstroSign = schubert;
  //   openinformodal();
  // } else if (musicBtn.id = 'btnschumann'){
  //   AstroSign = schumann;
  //   openinformodal();
  // } else if (musicBtn.id = 'btnRachmaninoff '){
  //   AstroSign = Rachmaninoff ;
  //   openinformodal();
  // } else if (musicBtn.id = 'btnbbrahms'){
  //   AstroSign = brahms;
  //   openinformodal();
  // }

  AstroSignName();    
}

musicBtn.forEach(musicButton => {

    musicButton.addEventListener('click', (event) => {
      const selected = event.target.id;
      console.log(eval(selected))
      const AstroSign = eval(selected);
      console.log(AstroSign);
      AstroSignName02(AstroSign);
      openinformodal();
  }, false); 
});



// const brahmsid = document.getElementById('brahms');
// brahmsid.addEventListener('click',  () => {
//   AstroSign = brahms;
//   AstroSignName();
//   openinformodal();
// }, false); 


// -------------------------
//   musician page
// -----------------------------

const musician = document.querySelectorAll('.musician');
const inforbox = document.getElementById('infor-box');
const inforcontainer = document.getElementsByClassName('infor-container');
const closeinfor = document.getElementsByClassName('closeinfor');



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
  // information();
  toPlay();
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



















