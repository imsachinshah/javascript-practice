const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Easy', 'Fun', 'Tough', 'Interesting', 'Frustrating'];

let i = 0;
let timer;

// async function sleep(time) {
//   return new Promise((resolve, reject) => (setTimeout(resolve, time)));
// }

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
    timer = setTimeout(typer, 200);
  };
  typer();
}

function erase() {
  let word = words[i].split('');
      // sleep(1000);
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