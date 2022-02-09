function setupLinks(document) {
    var a = document.getElementsByTagName('a');

    for (var index = 0; index < a.length; index++) {
        a.item(index).addEventListener('click', (e) => {
            if (a.item(index).href === null) {
                e.preventDefault();
            } else if (a.item(index).href == '') {
                    e.preventDefault();
            } else if ((a.item(index).href.indexOf('#') == 1) && (a.item(index).href.indexOf('mailto:') == -1) && (a.item(index).href.indexOf('javascript:') == -1) && (a.item(index).target != '_blank')) {
                e.preventDefault();
                var i = a.item(index).href;
                document.body.classList.remove('loaded');
                setTimeout(() => {
                    window.location = i;
                }, 250);
            }
        }, false);
    }
}

export default setupLinks;