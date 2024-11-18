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

    const content = `
URL: ${downloadItem.url}\n
Referrer: ${downloadItem.referrer}\n
User-Agent: ${navigator.userAgent}
`;

    chrome.tabs.create({
        url: "data:text/plain," + encodeURIComponent(content)
    });
});