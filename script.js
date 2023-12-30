"use strict";

let bgColors = [
  // { img1: "./img/dim-gunger-UO2hOHLq9Y0-unsplash.jpg" },
  // { img2: "./img/jason-leung-LwJRwf_KzcU-unsplash.jpg" },
  // { img3: "./img/jez-timms-_Ch_onWf38o-unsplash.jpg" },
  // { img4: "./img/joanna-kosinska-qs2tzPZo-G8-unsplash.jpg" },
  // { img5: "./img/image.jpg" },

  "./img/dim-gunger-UO2hOHLq9Y0-unsplash.jpg",
  "./img/jason-leung-LwJRwf_KzcU-unsplash.jpg",
  "./img/jez-timms-_Ch_onWf38o-unsplash.jpg",
  "./img/joanna-kosinska-qs2tzPZo-G8-unsplash.jpg",
  "./img/image.jpg",
];

function random() {
  return Math.trunc(Math.random() * bgColors.length);
}
// console.log(random());

const bgBody = document.getElementById("body");

document.addEventListener("click", () => {
  console.log(random());
  bgBody.style.backgroundImage = 'url("${bgColors[random()]}")';
});
