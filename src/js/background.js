chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getTabUrl") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var tab = tabs[0];
        sendResponse({ url: tab.url });
      });
      
      return true;
    }
  });