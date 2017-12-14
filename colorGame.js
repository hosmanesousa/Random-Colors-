let numSquares = 6;
//let colors = generateRandomColors(numSquares);
let colors = [];
let pickedColor = pickColor(); // call the random colors function
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector('h1');
let resetButton = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");

//colorDisplay.textContent = pickedColor;  inside the init func

init();

function init() {

  setUpModeButtons();
  setupSquares();
  reset();

}

// Make a random selection of colorDisplay
function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


function generateRandomColors(num) {
 let arr = [];
 for ( let i = 0; i < num; i++) {
   arr.push(randomColor());
 }
 return arr; // return the array
}

function randomColor() {
  let r = Math.floor(Math.random() * 256) ; // 0 -255
  let g = Math.floor(Math.random() * 256) ; // 0 -255
  let b = Math.floor(Math.random() * 256) ; // 0 -255
  return "rgb(" + r + ", " + g + ", " + b + ")";
}


resetButton.addEventListener('click', function(){

  reset();
});

// Match the color picked to all squares
function changeColors( color) {
  for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
    //h1.style.backgroundColor = color;
  }
}



function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  messageDisplay.textContent = ""; // erase Correct message
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  for ( let i = 0; i < squares.length; i++){
    if ( colors[i]) { // if there is a color that matches the square
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}




function setUpModeButtons() {
  for ( let i = 0; i < modeButtons.length; i++ ) {
    modeButtons[i].addEventListener('click', function(){
      this.classList.add("selected");
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else {
        numSquares = 6;
      }
      reset(); // call the reset func
    });
  }
}

function setupSquares() {
  for ( let i = 0; i < squares.length; i++){
  //  squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function(){
      let clickedColor = this.style.backgroundColor;
  //    console.log(clickedColor + "," + pickedColor)
      if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again";
      }
    });
  }
}


// Fade wrong colors
/*
for ( let i = 0; i < squares.length; i++){
//  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener('click', function(){
    let clickedColor = this.style.backgroundColor;
//    console.log(clickedColor + "," + pickedColor)
    if (clickedColor === pickedColor){
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
}
// Match the color picked to all squares
function changeColors( color) {
  for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
    //h1.style.backgroundColor = color;
  }
}



function generateRandomColors(num) {
 let arr = [];
 for ( let i = 0; i < num; i++) {
   arr.push(randomColor());
 }
 return arr; // return the array
}

function randomColor() {
  let r = Math.floor(Math.random() * 256) ; // 0 -255
  let g = Math.floor(Math.random() * 256) ; // 0 -255
  let b = Math.floor(Math.random() * 256) ; // 0 -255
  return "rgb(" + r + ", " + g + ", " + b + ")";
}


resetButton.addEventListener('click', function(){

  reset();
  /*
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  messageDisplay.textContent = ""; // erase Correct message
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  for ( let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
})*/
/*
// active button
easyBtn.addEventListener('click', function() {
   this.classList.add('selected');
   hardBtn.classList.remove('selected');
   numSquares = 3;
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for ( let i = 0; i < squares.length; i++){
     if ( colors[i]){ // if there is a color at this index
       squares[i].style.background = colors[i]; // assign new colors
     } else {
       squares[i].style.display = "none";
     }
   }
});
// active button
hardBtn.addEventListener('click', function() {
  this.classList.add('selected');
   easyBtn.classList.remove('selected');
   numSquares = 6;
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for ( let i = 0; i < squares.length; i++){
       squares[i].style.background = colors[i];
       squares[i].style.display = "block";

   }

}); */
