//img1
var randomNumer1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/dice" + randomNumer1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//img2
var randomNumer2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumer2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


//senario

if (randomNumer1 > randomNumer2) {
  document.querySelector("h1").innerHTML = "🚗 Wins!";
} else if (randomNumer2 > randomNumer1) {
  document.querySelector("h1").innerHTML = "👧 Wins!";
} else {
  document.querySelector("h1").innerHTML = "🤝 Draw!";
}


//click button
document.getElementById("button1").addEventListener("click", function() {
  var audio = new Audio("sounds/dice.mp3");
  audio.play();

  setTimeout(function() {
    location.reload()
  }, 350);
});


document.getElementById("button2").addEventListener("click", function() {
  document.querySelector("h1").innerHTML = "New Game!"
  var audio = new Audio("sounds/start.mp3");
  audio.play();
});