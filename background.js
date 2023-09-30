chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
  chrome.tabs.create({ url: "thank_you.html" });
});
