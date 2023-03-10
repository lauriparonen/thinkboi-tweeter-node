/* 
   Script for displaying the character count. 
   If the length is more than 140 characters,
   the 'tweet' button is disabled. 
*/

document.addEventListener('DOMContentLoaded', function() {
  const tweetBox = document.getElementById('tweet-box');
  const tweetCounter = document.getElementById('tweet-counter');
  const tweetButton = document.getElementById('send-tweet-button');
  const saveDraftButton = document.getElementById('save-draft-button');

    tweetCounter.innerHTML = 140;
  
  // Disable the buttons when the text area is empty 
  if (tweetBox.value === "") {
    tweetButton.disabled = true;
    saveDraftButton.disabled = true;
  }
  

  // Event listener to update the count
  tweetBox.addEventListener('keyup', function () {
    const tweetLength = this.value.length;
    tweetCounter.innerHTML = 140 - tweetLength;

  if (tweetLength > 140) {
    tweetCounter.classList.add('tweet-counter-error');
    tweetButton.disabled = true;
  } else if (tweetLength === 0) {
    tweetButton.disabled = true;
    saveDraftButton.disabled = true;
  } else {
    tweetCounter.classList.remove('tweet-counter-error');
    tweetButton.disabled = false;
    saveDraftButton.disabled = false;
  }
  });
});