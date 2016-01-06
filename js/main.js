chrome.tabs.getSelected(null, function(tab){
    var link = tab.url;

    $.post("http://ntust.me/add", {url: link}, function(resp) {
        $('h2').text(resp.url);

        document.execCommand('SelectAll');
        document.execCommand('Copy');
    })

    
})