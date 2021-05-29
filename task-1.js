const inputNumber = document.querySelector("#value");
const incrementButt = document.querySelector("#increment");
const decrementButt = document.querySelector("#decrement");
const errorSpan = document.querySelector(".error");

const changeHandle = () => {
  const inputValue = inputNumber.value;
  if (Number.isNaN(Number(inputValue)) || inputValue === "") {
    errorSpan.textContent = "Введіть коректне число!";
    return null;
  }
  errorSpan.textContent = "";
  return Number(inputValue);
};

const increment = () => {
  const inputValue = changeHandle();
  if (inputValue || inputValue === 0) {
    inputNumber.value = inputValue + 1;
  }
};

const decrement = () => {
  const inputValue = changeHandle();
  if (inputValue || inputValue === 0) {
    inputNumber.value = inputValue - 1;
  }
};

inputNumber.addEventListener("input", changeHandle);
incrementButt.addEventListener("click", increment);
decrementButt.addEventListener("click", decrement);
