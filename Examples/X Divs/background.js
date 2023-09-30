let hiddenCount = 0;
const welcomePage = "x-pages/welcome.html";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "updateCounter") {
    hiddenCount = message.count;
    try {
      if (chrome.action) {
        // Set the badge text
        chrome.action.setBadgeText(
          { text: hiddenCount.toString() },
          function () {
            if (chrome.runtime.lastError) {
              console.warn("Badge could not be set:", chrome.runtime.lastError);
              return;
            }
          }
        );

        // Set the badge background color to black
        chrome.action.setBadgeBackgroundColor(
          { color: [0, 0, 0, 255] },
          function () {
            if (chrome.runtime.lastError) {
              console.warn(
                "Badge background color could not be set:",
                chrome.runtime.lastError
              );
              return;
            }
          }
        );
      } else {
        console.warn("chrome.action is not defined.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
});

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    try {
      chrome.tabs.create({ url: welcomePage }, function (tab) {
        if (chrome.runtime.lastError) {
          console.warn("Tab could not be created:", chrome.runtime.lastError);
          return;
        }
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
});
