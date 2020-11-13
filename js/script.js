let riddles = [];
riddles[0] = {
    riddleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae ut reprehenderit laudantium ea dolorum quo minima voluptates. Possimus, aliquam1.",
    riddleSolution: ["lorem1", "1"]
}
riddles[1] = {
    riddleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae ut reprehenderit laudantium ea dolorum quo minima voluptates. Possimus, aliquam2.",
    riddleSolution: ["lorem2", "2"]
}
riddles[2] = {
    riddleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae ut reprehenderit laudantium ea dolorum quo minima voluptates. Possimus, aliquam3.",
    riddleSolution: ["lorem3", "3"]
}

let numRiddle = 0;
let attempts = 0;
let rights = 0;

let btnSubmit = document.querySelectorAll('.riddle__btn')[0];
let popup = document.querySelectorAll('#check')[0];

//  Кнопки на модальном окне
let btnTryAgain = document.querySelectorAll('.popup__btn--try_again')[0];
let btnNext = document.querySelectorAll('.popup__btn--next')[0];
let btnClear = document.querySelectorAll('.popup__btn--clear')[0];

let riddleAnswer = document.querySelectorAll('.riddle__answer')[0];
let popupResult = document.querySelectorAll('.popup__result')[0];

btnSubmit.addEventListener('click', function() {
    attempts++;
    let flag = false;
    for(let i = 0; i < riddles[numRiddle].riddleSolution.length; i++) {
        if(riddleAnswer.value.toLowerCase() == riddles[numRiddle].riddleSolution[i].toLowerCase()) {
            flag = true;
        }
    }
    if(flag) {
        popupResult.innerHTML = 'Верно, поздравляем!';
        rights++;
    }
    else { popupResult.innerHTML = 'Не угадали :('; }
    popup.style.display = 'block';
});

btnTryAgain.addEventListener('click', function() {
    popup.style.display = 'none';
});

btnNext.addEventListener('click', function() {
    numRiddle++;
    if(numRiddle < 3) {
        changeRiddle(numRiddle);
        riddleAnswer.value = '';
        popup.style.display = 'none';
    }
    else {
        let numTry = document.querySelectorAll('.popup__num_try')[0];
        let numRight = document.querySelectorAll('.popup__num_right')[0];

        numTry.innerHTML = 'Количество попыток: ' + attempts;
        numRight.innerHTML = 'Количество правильных ответов: ' + rights;

        document.querySelectorAll('#result')[0].style.display = 'block';
    }
});

btnClear.addEventListener('click', function() {
    numRiddle = 0;
    attempts = 0;
    rights = 0;

    riddleAnswer.value = '';
    changeRiddle(0);

    popup.style.display = 'none';
    document.querySelectorAll('#result')[0].style.display = 'none';  
})



function changeRiddle(numRiddle) {
    let elemRiddleText = document.querySelectorAll('.riddle__text');
    elemRiddleText[0].innerHTML = riddles[numRiddle].riddleText;
}