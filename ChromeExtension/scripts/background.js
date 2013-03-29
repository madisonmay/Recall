// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse(settings.toObject());
  });

var base_url = 'http://recall-api.herokuapp.com/search?q='

function selectionOnClick(info, tab) {
    var input = encodeURIComponent(info.selectionText);
    chrome.tabs.create({"url" : base_url + input, "active" : true});
}

chrome.contextMenus.create({
    "title" : "Search social media for '%s'",
    "contexts" : ["selection"],
    "onclick" : selectionOnClick
});

function omni(inString) {
    var input = encodeURIComponent(inString);
    chrome.tabs.create({"url" : base_url + input, "active" : true});
}

chrome.omnibox.onInputEntered.addListener(omni);
chrome.omnibox.setDefaultSuggestion({"description" : "Search social media for '%s'"});
