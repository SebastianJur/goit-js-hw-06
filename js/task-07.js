const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

const changeFontSize = (event) => {
  const fontSize = event.target.value + "px";
  span.style.fontSize = fontSize;
};

input.addEventListener("input", changeFontSize);