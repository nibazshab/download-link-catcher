chrome.downloads.onCreated.addListener(downloadItem => {
    chrome.downloads.erase({ id: downloadItem.id });

    chrome.tabs.create({
        url: "data:text/plain," + encodeURIComponent(downloadItem.url)
    });
});
