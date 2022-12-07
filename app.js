
const ROCK = "ROCK";
const PAPER = "PAPER";
const TIJERAS = "TIJERAS";

const TIE = 0;
const WIN = 1;
const LOST = 2;


const piedrabtn = document.getElementById("rock");
const papelbtn = document.getElementById("papel");
const tijerasbtn = document.getElementById("tijeras");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");


piedrabtn.addEventListener("click", () => {
    play(ROCK);

});

papelbtn.addEventListener("click",() => {
    play(PAPER);


});

tijerasbtn.addEventListener("click",() => {
    play(TIJERAS);


});

function play(userOption){

    const machineOption = calcMAchineOption();
    const result = calcResult(userOption, machineOption);

    userImg.src = ".img/"+userOption+".jpg";
    machineImg.src = ".img/"+machineOption+".jpg";

    switch(result){
         case TIE:
            resultText.innerHTML = "You have tied!";
            break;
        case WIN:
            resultText.innerHTML = "You have win!";
            break;
        case LOST:
            resultText.innerHTML = "you have lost";
            break;

    }


}

function calcMAchineOption() {

    const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return ROCK;

        case 1:
            return PAPER;

        case 2:
            return TIJERAS;


    }

    




}


function calcResult(userOption, machineOption){

    if(userOption === machineOption){
        return TIE;

    }else if(userOption === ROCK && machineOption === PAPER){  
        return LOST;

    }else if( userOption === ROCK && machineOption === TIJERAS){ 
        return WIN;
    }
    
}