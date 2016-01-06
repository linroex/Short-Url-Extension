chrome.tabs.getSelected(null, function(tab){
    var link = tab.url;

    $.post("http://ntust.me/add", {url: link}, function(resp) {
        $('h1').text(resp.url);    
    })

    
})