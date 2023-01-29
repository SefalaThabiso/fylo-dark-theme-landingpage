const btn = document.querySelector("[data-submit]");
const input = document.querySelector("#email");
const error = document.querySelector("[ data-error]");

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
    return true;
  } else {
    input.focus();
    return false;
  }
}

btn.addEventListener("click", () => {
  if (input.value == "") {
    error.innerHTML = "Email can't be empty";
  } else if (!ValidateEmail(input)) {
    error.innerHTML = "Email is not valid";
  }
});

input.addEventListener("click", () => {
  error.innerHTML = "";
});
