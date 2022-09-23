const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

const addInput = (event) => {
  if (event.target.value) {
    output.innerText = event.target.value;
  } else {
    output.innerText = "Anonymous";
  }
};

input.addEventListener("input", addInput);