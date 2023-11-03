// Iteration 2: Generate 2 random number and display it on the screen
let number1 = Math.round(Math.random()*100);
let number2 = Math.round(Math.random()*100);

let numberBox1 = document.getElementById("number1");
let numberBox2 = document.getElementById("number2");

numberBox1.innerText=number1;
numberBox2.innerText=number2;

// Iteration 3: Make the options button functional
let greaterThan = document.getElementById("greater-than");
let lesserThan = document.getElementById("lesser-than");
let equalTo = document.getElementById("equal-to");
let score = 0;

greaterThan.onclick=()=>{
    if(number1 > number2){
        score++;
        resetTime(timerId)
    }
    else{
        location.href="./gameover.html"
    }
    number1=Math.round(Math.random()*100);
    number2=Math.round(Math.random()*100);
    numberBox1.innerText=number1;
    numberBox2.innerText=number2;
}
lesserThan.onclick=()=>{
    if(number1 < number2){
        score++;
        resetTime(timerId)
    }
    else{
        location.href="./gameover.html"
    }
    number1=Math.round(Math.random()*100);
    number2=Math.round(Math.random()*100);
    numberBox1.innerText=number1;
    numberBox2.innerText=number2;
}
equalTo.onclick=()=>{
    if(number1 == number2){
        score++;
        resetTime(timerId)
    }
    else{
        location.href="./gameover.html"
    }
    number1=Math.round(Math.random()*100);
    number2=Math.round(Math.random()*100);
    numberBox1.innerText=number1;
    numberBox2.innerText=number2;
}

// Iteration 4: Build a timer for the game

let time = 100;
let timer = document.getElementById("timer");
let timerId;

function startTimer(){
    time = 100;
    time.innerText=time;
    timerId=setInterval(()=>{
        time--;
        if(time == 0){
            location.href="./gameover.html"
        }
    timer.innerText = time;
    localStorage.setItem("gameScore",score);
    },1000)
}

startTimer();


function resetTime(timerId){
    clearInterval(timerId)
    startTimer();
}