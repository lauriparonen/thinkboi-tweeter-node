# thinkboi-tweeter-node
This is a webpage frontend for a node.js implementation of thinkboi tweeter, that is, a client for sending tweets of length < 140 characters from one's
web browser through a private server. 

This version contains no functionality beyond the webpage frontend

TODO:
- implement saving drafts (done 27.12.22)
- implement viewing drafts (works on console; yet to implement showing on UI)
  -> now shown as a <li> in the div for viewing drafts; needs refinement

- add node.js interaction with twitter api:
  intended to work whenever the script is running; when the server is not running, the user can save the drafts in a file
