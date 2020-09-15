# Unlimited-Access
A chrome extension i developed using javascript.
It takes advantage of cookies to get unlimited access to Medium's paid blogs.
The Content script listens for a message from the background script, get's the url of the current tab and sends it back to the background script using message passing.
The Background script opens an incognito window using the given url and removes any cookie  matching the gived arguments after every three seconds. 
