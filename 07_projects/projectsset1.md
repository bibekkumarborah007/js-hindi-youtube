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