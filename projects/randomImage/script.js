const baseURL = "https://source.unsplash.com/all/300x300";

// this url gives an image. Use this and NO API calls

const content = document.querySelector(".content");

document.querySelector("button").addEventListener("click", function (e) {
  console.log(e.target);
  let image = document.createElement("img");
  image.src = `${baseURL}/`;
  content.appendChild(image);
});

