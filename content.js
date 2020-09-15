
 /* -----Send URL-----*/
 
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        var url = window.location.toString()
        sendResponse({url : url});   
    });


