const input = document.querySelector('#input-field');
const output = document.querySelector('#output-field');
const copyToClip = document.querySelector('#copyButton');

let button = document.querySelector('.btns-container');

button.addEventListener('click', (e) => {
//   console.log(input.value);
//   console.log(e.target.classList[1]);
  switch (e.target.classList[1]) {
    case 'uppercase':
      output.innerHTML = `${input.value.toUpperCase()}`;
      break;
    case 'lowercase':
      output.innerHTML = `${input.value.toLowerCase()}`;
      break;
    case 'capitalize':
      output.innerHTML = `${input.value.charAt(0).toUpperCase() + input.value.slice(1)}`;
      break;
    case 'bold':
      output.innerHTML = `<strong> ${input.value} </strong>`;
      break;
    case 'italic':
      output.innerHTML = `<em> ${input.value} </em>`;
      break;
    case 'underline':
      output.innerHTML = `<u> ${input.value} <u>`;
      break;
  }
  
  copyToClip.disabled = false;
  console.log(copyToClip)
  copyToClip.className = '';
  copyToClip.innerHTML = 'Copy to Clipboard'

  copyToClip.addEventListener('click', textCopy);
});

async function textCopy(){
    let text = output.textContent;
    try {
        await navigator.clipboard.writeText(text);
        alert(`${text} copied to clipboard!`)
        copyToClip.innerHTML = 'Copied';
        copyToClip.disabled = true;
        copyToClip.className = 'disabled'
    } catch (error) {
        console.log(error);
    }
}
