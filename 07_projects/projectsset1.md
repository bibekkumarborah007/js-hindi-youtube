# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 : Color Changes on Click

```javascript
console.log("bibek")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((i) => {
  console.log(i);
  i.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

### project 1 : Color Change using switch case
```javascript
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((i) => {
  i.addEventListener('click', (e) => {
    const color = e.target.id
    switch(color){
      case 'grey':
      case 'white':
      case 'blue':
      case 'yellow':
          body.style.backgroundColor = color
          break
      default:
          console.log(`Unknown color: ${color}`)
    }
  });
});

```

## project 2 : BMI Calculator
```javascript
const form = document.querySelector('form');

//forms on submit via post get type goes to url or server which need to stop the default method as we are sending any data to server. For that we get a option within events

//if we use h,wt outside from form it will collect empty values
form.addEventListener('submit', (e) => {
  e.preventDefault(); //to stop form from submit

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results'); //no parse since it is just an element

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  }else if( weight === "" || weight <=0 || isNaN(weight) ){
    result.innerHTML = `Please give a valid weight ${weight}`
  }else{
    //BMI formula:
   const bmi = (weight / ((height*height)/10000).toFixed(2))//upto 2 fixed decimals
   result.innerHTML = `<span>${bmi}</span>`
  }
});

//assignment: show the what range you fall for
```

## project 3: Digital Clock

```javascript

const clock = document.getElementById('clock');
// const newClock = document.querySelector('#click')

//digital clock

//need continous secodns changes
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4 : Guess the number 
```
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses'); //class instead of id
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; //to store the input values and display
let numGuess = 1; //for nu. of guesses
let playGame = true; //must for games to start the game

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //validate num 1 to 100 or not //email
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a valid number`);
  } else if (guess > 100) {
    alert(`Please enter a valid number`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayMessage(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //checks guess === num and display. Low and high. update guess
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too high`);
  }
}

function displayGuess(guess) {
  userInput.value = ''; //clean up guess
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  //return msgs // clean up
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ''; //clear all inputs
  userInput.setAttribute('disabled', ''); //set disable for no more new inputs which comes in key value pairs keep value '' empty
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```
## Project 5: Keyword
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="color">
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>`;
});

```

## project 6: unlimited color

```javascript
//generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(Math.floor(Math.random() * 16));
// console.log(randomColor());

//------on click change bgcolor on interval
let intervalId;
const startChangingColor = function () {
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
  if (!intervalId) {
    //intervalID === null efficient code
    intervalId = setInterval(changeBgColor, 1000);
  }
};

//-------on click stop change bgcolor
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null; //clear and dereference intervalID
};

//---EventListerner click
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```
