/*
  Methods for saving and viewing the drafted tweets.
*/

let draftCounter = 0;

function saveDraft(draft) {
  draftCounter++;

  const key = 'draft-${draftCounter}';

  localStorage.setItem(key, draft);
}

function viewDrafts() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('draft-')) {
      const draft = localStorage.getItem(key);
      // display the draft
      console.log(draft); // for testing purposes
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
const saveDraftButton = document.getElementById('save-draft-button');

saveDraftButton.addEventListener('click', function () {
  const draft = document.getElementById('tweet-box').value;
  saveDraft(draft);
});
});

document.addEventListener('DOMContentLoaded', function() {
const viewDraftsButton = document.getElementById('view-drafts-button');

viewDraftsButton.addEventListener('click', function() {
  viewDrafts();
});
});

document.addEventListener('DOMContentLoaded', function() {
function emptyDrafts() {
  localStorage.clear();
  draftCounter = 0;
}

const emptyDraftsButton = document.getElementById('empty-drafts-button');

emptyDraftsButton.addEventListener('click', function() {
  emptyDrafts();
});
});