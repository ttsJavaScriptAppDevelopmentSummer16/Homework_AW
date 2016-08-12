var woolOwners = [
  {
    name: 'master',
    bags: 1,
    location: null
  },
  {
    name: 'dame',
    bags: 1,
    location: null
  },
  {
    name: 'little boy',
    bags: 1,
    location: "down the lane"
  }
];


var bags = haveYouAnyWool();

function haveYouAnyWool() {
  for (var i = 0; i < woolOwners.length; i++) {
    var totalBags = woolOwners[i].bags + i;
  }
  return totalBags;
};


function baabaaBlackSheep() {
  console.log("BaaBaa BlackSheep have you any wool?");
  if (bags > 0) {
    console.log("yes sir, yes sir " + bags + " bags full");
  }
}

function oneForMy() {
  for (var i = 0; i < 2; i++) {
    var person = woolOwners[i].name;

    console.log("one for my " + person);
  }
}

baabaaBlackSheep();
oneForMy();

var littleBoy = woolOwners[2].name;

var whereHeLives = woolOwners[2].location;
console.log("one for the " + littleBoy + " that lives " + whereHeLives);
