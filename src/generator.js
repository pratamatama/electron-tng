const display = document.getElementById("display");
const genButton = document.getElementById("gen-button");
const copyrightYear = document.getElementById("copyright-year");

const MAX_LENGTH = 8;

const randomNumberFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generate = () => {
  let numbers = [];

  for (let i = 1; i <= MAX_LENGTH; i++) {
    numbers = [
      ...numbers,
      i >= MAX_LENGTH
        ? randomNumberFromInterval(1, 20)
        : randomNumberFromInterval(1, 35),
    ];
  }

  return numbers;
};

genButton.addEventListener("click", (e) => {
  e.preventDefault();
  const numbers = generate();
  display.innerHTML = numbers.join(" ");
});

copyrightYear.innerHTML = new Date().getFullYear();
