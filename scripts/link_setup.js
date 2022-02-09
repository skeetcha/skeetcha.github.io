function setupLinks(document) {
    document.querySelectorAll('a').forEach((element, key, parent) => {
        element.addEventListener('click', (e) => {
            if ((element.href == '') || (element.href == null)) {
                e.preventDefault();
            } else if ((element.href.indexOf('#') == 1) && (element.href.indexOf('mailto:') == -1) && (element.href.indexOf('javascript:') == -1) && (element.target != '_blank')) {
                e.preventDefault();
                var i = element.href;
                document.body.classList.remove('loaded');
                setTimeout(() => {
                    window.location = i;
                }, 250);
            }
        }, false);
    });
}

export default setupLinks;