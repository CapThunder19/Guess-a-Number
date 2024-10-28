let randomnum = parseInt((Math.random() * 100) + 1);

const submit = document.querySelector('#sub');
const guessarea = document.querySelector('#guessfield');
const pre_guess = document.querySelector('#pre');
const rem_guess = document.querySelector('#rem');
const startover = document.querySelector('.result');
const loworhigh = document.querySelector('.loworhigh');

const p = document.createElement('p');


let numguess = 1; 
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(guessarea.value);
        validate(guess); 
    });
}

function validate(guess) { 
    if (isNaN(guess)) {
        alert("Enter a valid number");
    } else if (guess > 100) {
        alert("Enter number less than or equal to 100");
    } else if (guess < 1) {
        alert("Enter a number larger than 0");
    } else {
        
        if (numguess === 10) { 
            display(guess);
            pri(`Game Over, number was ${randomnum}`);
            endgame();
        } else {
            display(guess);
            check(guess);
        }
    }
}

function pri(m) {
    loworhigh.innerHTML = `<h2>${m}</h2>`;
}

function check(guess) {
    if (guess === randomnum) {
        pri(`Your guess is right!`);
        endgame();
    } else if (guess < randomnum) {
        pri(`Number is low`);
    } else if (guess > randomnum) {
        pri(`Number is high`);
    }
}

function display(guess) {
    guessarea.value = '';
    pre_guess.innerHTML += `${guess}, `;
    numguess++; 
    rem_guess.innerHTML = `${11 - numguess}`; 
}

function endgame() {
    guessarea.value = '';
    guessarea.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgame">Start new Game</h2>`;
    startover.appendChild(p);
    playgame = false;
    newgame();
}

function newgame() {
    const newgamebutton = document.querySelector('#newgame');
    newgamebutton.addEventListener('click', function(e) {
        randomnum = parseInt(Math.random() * 100 + 1);
        pri('');
        pre_guess.innerHTML = ``;
        numguess = 1;  
        guessarea.value = ''; 
        rem_guess.innerHTML = '10'; 
        guessarea.removeAttribute('disabled');
        startover.removeChild(p);
        playgame = true;
    });
}

