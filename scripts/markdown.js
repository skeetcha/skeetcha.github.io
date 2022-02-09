function parseMarkdown(document) {
    document.querySelectorAll('.markdown').forEach((element, key, parent) => {
        var converter = new showdown.Converter();
        var convertedMessage = converter.makeHtml(element.innerHTML).replaceAll('<p>', '<div>').replaceAll('</p>', '</div>');
        var colors = ['#00eeff', '#fffb00', '#ff3e3e', '#ff70e7'];
        
        element.innerHTML = convertedMessage.replaceAll(/!(\d)+\[([*A-Za-z0-9 <>/\-".!']+)\]/gm, function(str, numMatch, innerText) {
            var num = parseInt(numMatch, 10) - 1;
            return '<span style="color:' + colors[num] + ';">' + innerText + '</span>';
        });
    });
}

export default parseMarkdown;