chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
	var url='http://www.ratemyprofessors.com/search.jsp?query='+''+response+"+"+'Rutgers';
	chrome.tabs.create({url: url});
});

