/* 
   Script for displaying the character count. 
   If the length is more than 140 characters,
   the 'tweet' button is disabled. 
*/
/*
const tweetBox = document.getElementById('tweet-box');
const tweetButton = document.getElementById('send-tweet-button');
const lenCount = document.getElementById('tweet-counter');
//const counter = document.append(div)


tweetBox.addEventListener('keyup', function(e) => {
  /*let tweetLength = (tweetBox.value).length;
  document.innerHTML("tweet-counter").textContent = '${tweetLength}';

  const target = e.target;
  const tweetLength = target.value.length;

  lenCount.innerHTML = 140 - tweetLength;


  if (tweetLength > 140) {
    tweetButton.disabled = true;
  } else {
    tweetButton.disabled = false;
  }
});

/**
let count = (myText.value).length;
    document.getElementById("count-result").textContent = `Total characters: ${count}`;
*/
document.addEventListener('DOMContentLoaded', function() {
  const tweetBox = document.getElementById('tweet-box');
  const tweetCounter = document.getElementById('tweet-counter');
  tweetCounter.innerHTML = 140;
  
  tweetBox.addEventListener('keyup', function () {
    const tweetLength = this.value.length;
    tweetCounter.innerHTML = 140 - tweetLength;
  });
});