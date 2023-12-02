window.onload = function() {
    chrome.storage.local.get('jamster', function (result) {
		document.getElementById("id").innerText = "Room ID: " + result.jamster;
    });
}