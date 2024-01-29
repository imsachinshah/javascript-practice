
const input = document.getElementById('user-input');
const card = document.getElementById('user-card');
const url = 'https://randomuser.me/api/';
const image = document.createElement('img');
const name = document.createElement('h2');
const para = document.createElement('p');


const setData = (user) => {
  image.src = `${user.picture.large}`;
  name.innerHTML = `${user.name.first} ${user.name.last}`;
  para.innerHTML = 
    `
        Location: ${user.location.country} <br>
        Email: ${user.email} <br>
        Age: ${user.dob.age} <br>
    `;
    displayCard()
}

const displayCard = () => {
  card.style.display = 'block'
  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(para);
}

const getUserData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setData(data.results[0]);
}

// debouncing 

const debounce = (mainFunc, delay) => {
    let timer; 

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            mainFunc(...args);
        }, delay);
    }
}

const debounceFunc = debounce(getUserData, 500);

input.addEventListener('keyup', debounceFunc);