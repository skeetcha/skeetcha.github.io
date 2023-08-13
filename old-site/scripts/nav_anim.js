function setupNavAnim(document) {
    document.querySelector('.cd-nav-trigger').addEventListener('click', (e) => {
        var isLateralNavAnimating = false;
        e.preventDefault();

        if (!isLateralNavAnimating) {
            isLateralNavAnimating = true;
            document.body.classList.toggle('navigation-is-open');

            function checker() {
                isLateralNavAnimating = false;
                document.querySelectorAll('.cd-navigation-wrapper').forEach((element, key, parent) => {
                    element.removeEventListener('webkitTransitionEnd', checker, false);
                    element.removeEventListener('otransitionend', checker, false);
                    element.removeEventListener('oTransitionEnd', checker, false);
                    element.removeEventListener('msTransitionEnd', checker, false);
                    element.removeEventListener('transitionend', checker, false);
                });
            }

            document.querySelectorAll('.cd-navigation-wrapper').forEach((element, key, parent) => {
                element.addEventListener('webkitTransitionEnd', checker, false);
                element.addEventListener('otransitionend', checker, false);
                element.addEventListener('oTransitionEnd', checker, false);
                element.addEventListener('msTransitionEnd', checker, false);
                element.addEventListener('transitionend', checker, false);
            });
        }
    }, false);
}

export default setupNavAnim;