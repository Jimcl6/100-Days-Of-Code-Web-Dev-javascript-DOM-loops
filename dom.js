let sectionElement = document.getElementById("counter");

let remainingCharElement = document.getElementById("remaining-chars");

let inputElement = document.querySelector("input");

function checkUserInput() {
  let enteredText = inputElement.value;
  let maxCharsInput = inputElement.maxLength;

  let remainingChars = maxCharsInput - enteredText.length;

  if (remainingChars === 0) {
    inputElement.classList.add("error");
    remainingCharElement.classList.add("error");
  } else if (remainingChars <= 10) {
    inputElement.classList.add("warning");
    remainingCharElement.classList.add("warning");
  } else {
    inputElement.classList.remove("error", "warning");
    remainingCharElement.classList.remove("error", "warning");
  }

  remainingCharElement.textContent = `${remainingChars}/${maxCharsInput}`;
}
let buttonElement = document.querySelector(".btn-reset");

// buttonElement.removeEventListener();

inputElement.addEventListener("input", checkUserInput);
