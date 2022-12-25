const textArea = document.getElementById('tweet-box');

const counter =

  textArea.addEventListener('input', updateCounter);

function updateCounter() {
  const count = 140 - textArea.value.length;
  counter.innerHTML = count; // connect to the textfield element
}