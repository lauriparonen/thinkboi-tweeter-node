/* 
   Script for displaying the character count. 
   If the length is more than 140 characters,
   the 'tweet' button is disabled. 
*/

document.addEventListener('DOMContentLoaded', function() {
  const tweetBox = document.getElementById('tweet-box');
  const tweetCounter = document.getElementById('tweet-counter');
  const tweetButton = document.getElementById('send-tweet-button');
  
  tweetCounter.innerHTML = 140;

  // Event listener to update the count
  tweetBox.addEventListener('keyup', function () {
    const tweetLength = this.value.length;
    tweetCounter.innerHTML = 140 - tweetLength;
  });
  if (tweetLength > 140) {
    tweetCounter.classList.add('tweet-counter-error')
    tweetButton.disabled = true;
    
  } else {
    tweetCounter.classList.remove('tweet-counter-error');
    tweetButton.disabled = false;
  }
  
});