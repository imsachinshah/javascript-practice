const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Easy', 'Fun', 'Tough', 'Interesting', 'Frustrating'];

let i = 0;
let timer;

function type() {
  let word = words[i].split('');
  console.log(word);
  let typer = function () {
    if (word.length > 0) {
      typedTextSpan.textContent += word.shift();
    } else {
      erase();
      return false;
    }
    timer = setTimeout(typer, 400);
  };
  typer();
}

function erase() {
  let word = words[i].split('');
  let eraser = function () {
    if (word.length > 0) {
      word.pop();
      typedTextSpan.textContent = word.join('');
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      type();
      return false;
    }
    timer = setTimeout(eraser, 400);
    // sleep()
  };
  eraser();
}

type();

// console.log(Typed())