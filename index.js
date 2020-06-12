var change = document.getElementById('maincontainer');
var counter = 0;
var myPictures = [
    "img/ocean2.png",
    "img/wood2.png",
    "img/beach2.png",
    "img/cave2.png",
    "img/sky2.png",
    "img/snow2.png",
    "img/sunset2.png",
    "img/underwater2.png",
];

function nextPic() {
  counter += 1;
  if (counter > myPictures.length -1) {
    counter = 0;
  }
  change.style.backgroundImage = "url(" + myPictures[counter] + ")";
}

// Here's how you can hookup the click event
change.addEventListener('click', nextPic);

// Load the first image
counter -= 1; // Do this so it starts at the first, not the second
nextPic();
