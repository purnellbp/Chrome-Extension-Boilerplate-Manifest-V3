document.addEventListener("DOMContentLoaded", function() {
  const spanText = document.getElementById("spanText");
  const tagName = document.getElementById("tagName");
  const saveButton = document.getElementById("save");

  // Load saved settings or set defaults
  chrome.storage.sync.get(["spanText", "tagName"], function(data) {
    spanText.value = data.spanText || "Ad";
    tagName.value = data.tagName || "article";
  });

  // Save settings
  saveButton.addEventListener("click", function() {
    chrome.storage.sync.set({ 
      "spanText": spanText.value,
      "tagName": tagName.value
    });
  });
});

// Fetch the manifest data to get the version number
chrome.runtime.getManifest().version;

// Display the version number on the settings page
document.addEventListener('DOMContentLoaded', function() {
  const version = chrome.runtime.getManifest().version;
  document.getElementById('version').textContent = 'X Divs - Ver: ' + version;
});