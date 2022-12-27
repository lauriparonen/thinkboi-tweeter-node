/*
  Methods for saving and viewing the drafted tweets.
*/

let draftCounter = 0;
document.addEventListener('DOMContentLoaded', function() {
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


const saveDraftButton = document.getElementById('save-draft-button');

saveDraftButton.addEventListener('click', function () {
  const draft = document.getElementById('tweet-box').value;
  if (draft.length === 0) return;
  saveDraft(draft);
});

const viewDraftsButton = document.getElementById('view-drafts-button');

viewDraftsButton.addEventListener('click', function() {
  viewDrafts();
});

function emptyDrafts() {
  if (confirm("You're about to clear all your drafted tweets. Are you sure?")) {
    
  localStorage.clear();
  draftCounter = 0;
  }
}

const emptyDraftsButton = document.getElementById('empty-drafts-button');

emptyDraftsButton.addEventListener('click', function() {
  emptyDrafts();
});
});