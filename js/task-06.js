const input = document.getElementById("validation-input");

input.addEventListener("blur", (event) => {
  const dataLength = input.getAttribute("data-length");

  const currentLength =
    event.target.value.length && event.target.value.length.toString();

  if (dataLength === currentLength) {
    input.classList.add("valid");
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
  } else {
    input.classList.add("invalid");
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
  }
});
