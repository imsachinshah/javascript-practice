const form = document.querySelector('form');
const inputField = document.querySelector('#inputField');
const button = document.querySelector('button');

const outputBox = document.querySelector('#outputBox');
const errorBox = document.querySelector('.errorBox');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(outputBox.hasChildNodes()){
        outputBox.replaceChildren();
    }

    errorBox.innerHTML = ''
    validateInput(inputField.value);
})

function isOdd(i){
    return (i % 2 == 1) ? true : false
}

function isPrime(n){
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    let m = Math.sqrt(n); 
    for (let i = 2; i <= m; i++)
        if (n % i == 0) return false;
    return true;
}

function createBox(i){
    let numberBox = document.createElement('div');
    numberBox.className = 'numberBox';
    let text = document.createTextNode(`${i}`);
    numberBox.appendChild(text);
    return numberBox;
}

function validateInput(input){
    console.log(input)
    if(input == '' || isNaN(input)){
        errorBox.innerHTML = 'Number is Invalid'
    }
    else{
        generateNumbers(parseInt(input));
    }
}

function generateNumbers(limit){
    for(let i = 0; i < limit; i++){
        if(isPrime(i)){
            let numBox = createBox(i);
            numBox.style.backgroundColor = `#dd3f3f`;
            outputBox.appendChild(numBox);
        }
        else if(isOdd(i)){
            let numBox = createBox(i);
            numBox.style.backgroundColor = '#3f47dd';
            outputBox.appendChild(numBox);
        }
        else{
            let numBox = createBox(i);
            numBox.style.backgroundColor = '#3fdd5c';
            outputBox.appendChild(numBox);
        }
    }
}

