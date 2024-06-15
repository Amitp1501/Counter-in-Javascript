const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const incrementBtn = document.getElementById("increment");
const counterDisplay = document.getElementById("counter");
console.log(counterDisplay);

let count = 0;

incrementBtn.onclick = function () {
  count++;
  counterDisplay.textContent = count;
  disableButtons();
};

decrementBtn.onclick = function () {
  count--;
  counterDisplay.textContent = count;
  disableButtons();
};

resetBtn.onclick = function () {
  count = 0;
  counterDisplay.textContent = count;
  disableButtons();
};
