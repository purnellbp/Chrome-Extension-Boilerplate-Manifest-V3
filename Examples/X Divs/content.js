let hiddenCount = 0;
let lastHiddenCount = 0;

function hideAds(spanText, tagName) {
  $("span").each(function () {
    try {
      if ($(this).text().includes(spanText)) {
        const parentElement = $(this).closest(tagName);
        if (parentElement.length > 0 && parentElement.is(":visible")) {
          parentElement.hide();
          hiddenCount++;
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });

  // Only send a message if the count has changed
  if (hiddenCount !== lastHiddenCount) {
    chrome.runtime.sendMessage({ action: "updateCounter", count: hiddenCount });
    lastHiddenCount = hiddenCount;
  }
}

// Load settings and initial hide, defaults to "Ad" and "article"
chrome.storage.sync.get(["spanText", "tagName"], function (data) {
  const spanText = data.spanText || "Ad";
  const tagName = data.tagName || "article";
  hideAds(spanText, tagName);

  // Observe for changes
  const observer = new MutationObserver(() => hideAds(spanText, tagName));
  observer.observe(document.body, { childList: true, subtree: true });
});
