/* Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const randomNumber = [];
const eleOutput = document.querySelector('.output');
const eleCard = document.createElement("div")
const time = setTimeout(setupGame, 8000)
const btnPlay = document.querySelector('.btn-play');
const userNumbInput = document.querySelectorAll('#inputValue');
const outputResults = document.querySelector('.results');

while(randomNumber.length < 5) {
   let numb = genRandomNumber(1, 100);
   if (randomNumber.includes(numb)){

   } else {
       randomNumber.push(numb)
   }
}

for(i=0; i <= 5; i++){
    eleOutput.appendChild(eleCard.cloneNode(true))
    eleCard.classList.add('card')
    eleCard.innerHTML = randomNumber[i]
}

function genRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function setupGame(){
    let cards = document.querySelectorAll('.card');
    cards.forEach(element => {
        element.classList.add('hide')
    })
    let gameInput = document.querySelector('.game');
    gameInput.classList.remove('hide')
}
btnPlay.addEventListener('click', function(){
    if(userNumbInput[0].value == randomNumber[0] && userNumbInput[1].value == randomNumber[1] && userNumbInput[2].value == randomNumber[2] && userNumbInput[3].value == randomNumber[3] && userNumbInput[4].value == randomNumber[4]) {
       outputResults.innerHTML = "hai vinto"
    } else {
        outputResults.innerHTML = `hai sbagliato! i numeri giusti erano ${randomNumber}`
    }
});
