// Characters


var mrGreen =  {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
};

var drOrchid = {
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:   "Scientist"
};

var profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
};

var missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
};

var mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"
};

var mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
};

// Weapons
var weapons = [
{name: "rope", color: "black", description: "plastic",   weight: 10},
{name: "knife", color: "white", description: "wood",   weight: 8},
{name: "candlestick", color: "blue", description: "metal",   weight: 2},
{name: "dumbbell", color: "green", description: "heavy",   weight: 30},
{name: "poison", color: "yellow", description: "sweet",   weight: 2},
{name: "axe", color: "purple", description: "rusty",   weight: 15},
{name: "bat", color: "brown", description: "gum",   weight: 13},
{name: "trophy", color: "pink", description: "win",   weight: 25},
{name: "pistol", color: "orange", description: "007",   weight: 20}
]

// Rooms
var rooms = [ 
{name: "Dinning Room"},
{name: "Conservatory"},
{name: "Kitchen"},
{name: "Study"},
{name: "Library"},
{name: "Billiard Room"},
{name: "Lounge"},
{name: "Ballroom"},
{name: "Hall"},
{name: "Spa"},
{name: "Living Room"},
{name: "Observatory"},
{name: "Theater"},
{name: "Guest House"},
{name: "Patio"}
];

//characters

var characterzzz = [mrMustard, mrGreen, drOrchid]

function randomElementSelector(anArray) {

  return anArray[Math.floor(Math.random() * anArray.length)]

}

function pickMystery(characters, weapons, rooms) {
  var mysteryEnvelope = {}
  mysteryEnvelope.murderer = randomElementSelector(characters)
  mysteryEnvelope.weapon = randomElementSelector(weapons)
  mysteryEnvelope.room = randomElementSelector(rooms)

  return mysteryEnvelope
}


var theMystery = pickMystery(characterzzz, weapons, rooms)


function revealMystery(aMysteryEnvelope) {

console.log(aMysteryEnvelope.murderer.first_name + " Mr.Body in the " + aMysteryEnvelope.room.name + " with a " + aMysteryEnvelope.weapon.name + "!!!" )

console.log(`${aMysteryEnvelope.murderer.first_name} killed Mr.Body in the ${aMysteryEnvelope.room.name} with a ${aMysteryEnvelope.weapon.name}`)
}

revealMystery(theMystery);

//button


document.body.onload = start;



function startNewGame() {
  var mystery = pickMystery(characterzzz, weapons, rooms)
  revealMystery(mystery)

}
// startNewGame()
// startNewGame()

function visualReveal(mystery){
  console.log( "Hello", mystery)

  var characterImgSrc = mystery.murderer.image;
  document.getElementById("murderer").setAttribute("src",characterImgSrc);
  document.getElementById("name_murderer").innerHTML= "Name character: " + mystery.murderer.first_name + mystery.murderer.last_name;
  document.getElementById("weapon").innerHTML= "The weapon: " + mystery.weapon.name;
  document.getElementById("room").innerHTML="The room :" + mystery.room.name;
  // document.getElementsByClassName("room"[0]="In the room:" +mystery.room.name);
  }
  //visualReveal(theMystery);


  //add buttom
  function start(){
    var body = document.getElementsByTagName("body")[0];
    var button = document.createElement("button");
    button.innerHTML = "Start Game";
    body.appendChild(button);
    button.addEventListener ("click", function(){
      visualReveal(theMystery);
    }) 
  }

  //change elements



