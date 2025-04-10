//Game constants and variables
let direction = { x: 0, y: 0 };
let foodsound = new Audio("food.mp3");
let gameOverSound = new Audio("gameover.mp3");
let moveSound = new Audio("move.mp3");
let musicSound = new Audio("music.mp3");
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 6, y: 7 };

//game functions

function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}
function gameEngine() {
  //part-1:updating the snake array and food

  //part 2:Display the snake and food
  //Display the snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    snakeElement.classList.add("snake");
    if (index === 0) {
      snakeElement.classList.add("head");
    }
    board.appendChild(snakeElement);
  });
  //display the food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

//main logic starts here
window.requestAnimationFrame(main);
