
chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.sendMessage(tab.id , {message: "Hey send me the url"}, function(response){
    var storedUrl = response.url
    chrome.windows.create({url: storedUrl, incognito: true});
    chrome.windows.getAll({populate: true}, function(window_list){
    //console.log(window_list)
    for(let w of window_list){
      if(w.incognito){
        chrome.cookies.getAllCookieStores(function(cs){
          console.log(cs)
          incognitoCs = cs[1].id
          setTimeout(() => {
            chrome.cookies.remove({storeId : incognitoCs, name : 'uid', url : storedUrl}, function(IncognitoCookies){
              console.log("Cookie removed")
            })  
          }, 3000);
         
        })
      }
    }
  })
     
  })
})  











