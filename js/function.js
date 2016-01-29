function setClipboard(str) {
    $('body').append('<textarea id="_url" cols="1" rows="1"></textarea>');
    $('#_url').text(str);
    $('#_url').select();
    document.execCommand('Copy');
    $('#_url').remove();
}