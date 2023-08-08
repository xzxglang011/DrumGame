let startBtn = document.querySelector(".start-btn");
let howToBtn = document.querySelector(".howTo-btn")
let closeBtn = document.querySelector(".closeHowto-btn")
let drum =document.querySelectorAll(".drum");
let currKey =[];
let memKey = [];
let compareKey=[];
let pressedCount = 0;
let winCount = 0;

howToBtn.addEventListener("click",function(){
  document.querySelector(".popUpContainerHowto").classList.add("active");
});


closeBtn.addEventListener("click",function(){
  document.querySelector(".popUpContainerHowto").classList.remove("active");
  reloadPage ()
});

startBtn.addEventListener("click",function(){
  startBtn.classList.add("hide");
});

function triggerSound (params) {
let counter = 0;
const intervalId = setInterval(() => {
  randomSound();
  counter += 1;
if (counter === 3) {
    memKey = currKey
    clearInterval(intervalId);
    currKey=[];
    console.log(memKey);
    console.log(currKey);
  }
}, 500);

}


function checkedKey (pressedCount){
  let index = pressedCount-1;

  if(memKey[index] === compareKey[index]){
    document.querySelector('.'+memKey[index] ).classList.add("corrected");
    winCount++
  } 
  else if (memKey[index] !== compareKey[index]) {

    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".popUpContainerLose").classList.add("active");

  }

if (winCount === 3){
    document.querySelector(".popUpContainerWin").classList.add("active");
    document.querySelector("body").style.backgroundColor = "green";
  }
}



function randomSound (){
  let drumKey = ["w",'a','s','d','j','k','l'];
  let randomkey = Math.floor(Math.random() * 7);
  let randomSound = drumKey[randomkey];
  makeSound(randomSound);
  buttonAnimation(randomSound);
  currKey.push(randomSound);
}




for(var i = 0; i<drum.length; i ++){
  drum[i].addEventListener('click',function(){
    let button = this.innerHTML;
    makeSound(button);
    buttonAnimation(button);
  });
}

document.addEventListener('keydown',(event)=>{
  var name = event.key;
  makeSound(name);
  buttonAnimation(name);
  pressedCount++
  compareKey.push(name);
  console.log(compareKey);
  checkedKey (pressedCount);

});


function makeSound(note){
    switch(note){
    case "w" :
      let audio0 = new Audio(`./sounds/tom-1.mp3`);
      audio0.play(); 
    break;
    case "a" :
      let audio1 = new Audio(`./sounds/tom-2.mp3`);
      audio1.play(); 
    break;
    case "s" :
      let audio2 = new Audio(`./sounds/tom-3.mp3`);
      audio2.play(); 
    break;
    case "d" :
      let audio3 = new Audio(`./sounds/tom-4.mp3`);
      audio3.play(); 
    break;
    case "j" :
      let audio4 = new Audio(`./sounds/crash.mp3`);
      audio4.play(); 
    break;
    case "k" :
      let audio5 = new Audio(`./sounds/snare.mp3`);
      audio5.play(); 
    break;
    case "l" :
      let audio6 = new Audio(`./sounds/kick-bass.mp3`);
      audio6.play(); 
    break;
   
  }
}


const buttonAnimation = (key) => {
  let animation = document.querySelector(`.${key}`);
  animation.classList.add(`pressed`);
  setTimeout(function(){
    animation.classList.remove(`pressed`);
  },100);
}


function reloadPage (){
  location.reload();
}

