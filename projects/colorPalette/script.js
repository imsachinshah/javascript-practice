const colors = document.querySelectorAll(".color");
const colourCodes = document.querySelectorAll(".colorCode");
const button = document.querySelector("button");

const url = "http://colormind.io/api/";

const xhr = new XMLHttpRequest();

let data = {
  model: "default",
  input: ["N", "N", "N", "N", "N"],
};

const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
  return ("#" + componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase();
}

function changeColors(palette) {
  colors.forEach((color, index) => {
    color.style.backgroundColor = `rgb(${palette[index][0]}, ${palette[index][1]}, ${palette[index][2]})`;
    color.firstElementChild.textContent = `${rgbToHex(palette[index][0], palette[index][1], palette[index][2])}`
  });
}

function getPalette() {
  let palette;
  xhr.open("POST", url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      palette = JSON.parse(xhr.responseText).result;
      changeColors(palette);
    }
  };
  xhr.send(JSON.stringify(data));

}

button.addEventListener("click", getPalette);

// colourCodes.forEach((colourCode) => {
//   console.log(colourCode)
//   colourCode.addEventListener('click', async function textCopy(){
//     let text = colourCode.textContent;
//     try {
//         await navigator.clipboard.writeText(text);
//         alert(`${text} copied to clipboard!`);
//     } catch (error) {
//         console.log(error);
//     }
//   })
// })
