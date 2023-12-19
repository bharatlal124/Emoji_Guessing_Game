const emojiDetails = [
  {
    description: "smiling face with sunglasses",
    emoji: "😎",
  },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "🥲" },
  { description: "Party popper", emoji: "🎉" },
];

let currectEmojiindex = 0;
let score = 0;
let seconds = 30;
let timer;

const timerElement = document.getElementById("timer");

const guessInput = document.getElementById("guess-input");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function displayEmoji() {
  const descriptionElement = document.getElementById("description");
  descriptionElement.textContent = emojiDetails[currectEmojiindex].emoji;
  timerElement.textContent = `Time : ${seconds}s`;
}

function checkGuess() {
  const guess = guessInput.value.trim().toLowerCase();
  const correctEmoji = emojiDetails[currectEmojiindex].description

    .trim()
    .toLocaleLowerCase();

  if (guess === correctEmoji) {
    resultElement.textContent = "Correct!";
    score++;
  } else {
    resultElement.textContent = "Wrong!";
  }

  scoreElement.textContent = `Score: ${score}`;
  guessInput.value = "";
  guessInput.focus();
  nextEmoji();
}

function nextEmoji() {
  currectEmojiindex++;
  setTimeout(() => {
    resultElement.textContent = "";
  }, 1000);

  if (currectEmojiindex === emojiDetails.length) {
    currectEmojiindex = 0;
  }

  displayEmoji();
}

document.getElementById("guess-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  displayEmoji();
  startTimer();
});

function startTimer() {
  timer = setInterval(() => {
    seconds--;

    timerElement.textContent = `Time : ${seconds}s`;

    if (seconds <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  guessInput.disabled = true;
  timerElement.textContent = "";
}
