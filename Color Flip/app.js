const colors =[
  "green","red", "black","blue","yellow","cyan",
  "purple","olive","navy","silver","aqua","orange",
  "brown","gold","pink","coral"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color")
let previousNumber = 0;
btn.addEventListener("click", function(){
  let randomNumber;
  do{
  randomNumber = getRandomNumber();
  }while(randomNumber === previousNumber);
  previousNumber = randomNumber;
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

})

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
