chrome.downloads.onDeterminingFilename.addListener((downloadItem) => {
    chrome.downloads.cancel(downloadItem.id).then(() => {
        if (chrome.runtime.lastError)
            chrome.runtime.lastError = null;
    });

    if (downloadItem.finalUrl && downloadItem.finalUrl != "about:blank") {
        downloadItem.url = downloadItem.finalUrl;
    }

    if (downloadItem.referrer == "about:blank") {
        downloadItem.referrer = "";
    }

    chrome.tabs.create({
        url: "data:text/plain," + encodeURIComponent(downloadItem.url)
    });
});
