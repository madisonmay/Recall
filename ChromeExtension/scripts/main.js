chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/main.js");



		// ----------------------------------------------------------

	}
	}, 10);
});

$(document).ready(function(){
    console.log("Document is ready...");
    $('.login').click(function() {
        chrome.tabs.create({"url" : 'http://recall-api.herokuapp.com/', "active" : true});
    });
});
