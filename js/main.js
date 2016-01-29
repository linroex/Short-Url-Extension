chrome.tabs.getSelected(null, function(tab){
    var link = tab.url;

    $.post("https://ntust.me/add", {url: link}, function(resp) {
        $('h2').text(resp.url);
        setClipboard(resp.url);
        document.execCommand('SelectAll');
    })

    
})