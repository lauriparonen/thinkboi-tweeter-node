/* 
   Script for displaying the character count. 
   If the length is more than 140 characters,
   the 'tweet' button is disabled. 
*/

const tweetBox = document.getElementById('tweet-box');
const tweetButton = document.getElementById('send-tweet-button');
const lenCount = document.getElementById('tweet-counter');

tweetBox.addEventListener('input', function() {
  const tweetLength = tweetBox.value.length;
  lenCount.textContent = tweetLength;

  if (tweetLength > 140) {
    tweetButton.disabled = true;
  } else {
    tweetButton.disabled = false;
  }
});