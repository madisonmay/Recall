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
    $.get('http://www.google.com', function(data){
        console.log(data);
    });
});
