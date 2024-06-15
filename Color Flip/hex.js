const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
  let randomHex = getRandomHexColor();
  document.body.style.backgroundColor = randomHex;
  color.textContent = randomHex;

})

function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (0xFFFFFF in hexadecimal)
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // Pad the randomColor with leading zeros if it's less than 6 digits long
  while (randomColor.length < 6) {
    randomColor = '0' + randomColor;
  }

  // Return the full hexadecimal color string including the '#' prefix
  return '#' + randomColor;
}