/*
  Methods for saving and viewing the drafted tweets.
*/

// Initialize draft counter to zero
let draftCounter = 0;

// Event listener to make sure functions are all active when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
function saveDraft(draft) {

  // Increment draft counter whenever new draft is saved
  draftCounter++;

  // Index the drafts with the draft counter variable
  const key = 'draft-${draftCounter}';

  // Save the draft
  localStorage.setItem(key, draft);
}

function viewDrafts() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    
    if (key.startsWith('draft-')) {
      const draft = localStorage.getItem(key);
      const  draftList = localStorage.getItem(key);
      const draftItem = document.createElement('li');
      draftItem.textContent = draft;
      draftList.appendChild(draftItem);
      // display the draft
      console.log(draft); // for testing purposes
    
      
    }
  }
}


const saveDraftButton = document.getElementById('save-draft-button');

saveDraftButton.addEventListener('click', function () {
  const draft = document.getElementById('tweet-box').value;

  // If the text area is empty, don't call saveDraft()
  if (draft.length === 0) return;
  saveDraft(draft);
});

const viewDraftsButton = document.getElementById('view-drafts-button');
coonst savedDraftsElement = document.getElementById('saved-drafts');

viewDraftsButton.addEventListener('click', function() {
  savedDraftsElement.classList.toggle('hidden');
  viewDrafts();
});

function emptyDrafts() {
  // Confirmation window before clearing drafts
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