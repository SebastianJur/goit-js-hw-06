const form = document.querySelector("form");

const submitForm = (event) => {

  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert("Please fill in all the fields");
  } else {
    const userData = {
      email: email,
      password: password,
    };

    console.log(userData);

    form.reset();
  }
};

form.addEventListener("submit", submitForm);