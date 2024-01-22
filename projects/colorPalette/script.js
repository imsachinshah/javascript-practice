const colors = document.querySelectorAll('.color');
const button = document.querySelector('button');

const paletteURL = 'http://www.colourlovers.com/api/palettes/random';
const url = 'http://colormind.io/api/';
const xhr = new XMLHttpRequest();

let data = {
    model: 'default',
    input: [[44,43,44],[90,83,82],"N","N","N"]
}

async function getPalette() {
   xhr.open('POST', url, true);
   xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
        console.log(xhr.responseText)
    }
   }
   xhr.send(JSON.stringify(data));

}

button.addEventListener('click', getPalette);
