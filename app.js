const countDownEl = document.querySelector("#time");
const plusWorkBtn = document.querySelector("#plusWorkBtn");
const plusBreakBtn = document.querySelector("#plusBreakBtn");
const minusWorkBtn = document.querySelector("#minusWorkBtn");
const minusBreakBtn = document.querySelector("#minusBreakBtn");
const workText = document.querySelector("#workText")
const breakText = document.querySelector("#breakText")

let isActive = false;

let startingMinutes = 25;
let breakTime = 5;
let time = startingMinutes * 60;
let setTime;
let setBrekTime;
let minutes;
let seconds;

countDownEl.addEventListener("click", function(){
    if(!isActive){
        isActive = true;
        setTime = setInterval(updateCountDown, 1000);
        
        
    } else {
        clearInterval(setBrekTime )
        clearInterval(setTime);
        isActive = false;
    }
})

function updateCountDown(){
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    seconds = seconds<10 ? "0"+ seconds : seconds;
    countDownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if(minutes == 0 && seconds == "00"){
        startingMinutes = Number(breakText.innerHTML);
        time = startingMinutes * 60;
        clearInterval(setTime)
        setBrekTime = setInterval(updateCountDown, 1000)
       
    }
}



plusWorkBtn.addEventListener("click", function(){
    if(!isActive){
        startingMinutes += 1;
        countDownEl.innerHTML = startingMinutes;
        workText.innerHTML = startingMinutes;
        startingMinutes = Number(countDownEl.innerHTML);
        time = startingMinutes * 60;
    }
})

minusWorkBtn.addEventListener("click", function(){
    if(!isActive){
        if(startingMinutes >1){
            startingMinutes -= 1;
            countDownEl.innerHTML = startingMinutes;
            workText.innerHTML = startingMinutes;
            startingMinutes = Number(countDownEl.innerHTML);
            time = startingMinutes * 60;
        }
        
    }
})

minusBreakBtn.addEventListener("click", function(){
    if(breakTime > 1){
        breakTime -= 1;
        breakText.innerHTML = breakTime;
    }
})

plusBreakBtn.addEventListener("click", function(){
    breakTime += 1;
    breakText.innerHTML = breakTime;
    
})
