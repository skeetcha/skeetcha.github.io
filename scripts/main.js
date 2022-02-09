import getBase from './base.js';
import getProject from './project.js';

(function () {
    var projects = [{id: 'fourwoods', title: 'The Four Woods Podcast', description: 'An audio drama podcast about myth and magic - Writer, Director, Editor, Producer'}, {id: 'mememachine', title: 'Meme Machine', description: 'Download, Rate, and Create Memes - Programmer'}, {id: 'shutin', title: 'Shut In', description: 'Short Film - Gaffer, Foley Artist, Sound Editor'}, {id: 'bulletrush', title: 'Bullet Rush', description: 'Cuphead meets First Person Shooter games - Programmer, Project Manager'}, {id: 'dndcombatsim', title: 'Dungeons and Dragons Combat Simulator', description: 'Combat simulator for the 5th Edition of the Tabletop RPG Dungeons and Dragons - Programmer, Project Manager'}, {id: 'cansat', title: 'CanSat', description: 'A simulated sattelite in an enclosure the shape and size of a soda can - Programmer'}];

    document.body.innerHTML = getBase(true);
    document.querySelector('.site-content').innerHTML = `<div class="projects-feed cf"></div>`;

    for (var i = 0; i < projects.length; i++) {
        document.querySelector('.projects-feed.cf').innerHTML += getProject(projects[i]);
    }

    var isLateralNavAnimating = false;

    document.querySelector('.cd-nav-trigger').addEventListener('click', (e) => {
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

    document.querySelectorAll('.markdown').forEach((element, key, parent) => {
        var converter = new showdown.Converter();
        var convertedMessage = converter.makeHtml(element.innerHTML).replaceAll('<p>', '<div>').replaceAll('</p>', '</div>');
        var colors = ['#00eeff', '#fffb00', '#ff3e3e', '#ff70e7'];
        
        element.innerHTML = convertedMessage.replaceAll(/!(\d)+\[([*A-Za-z0-9 <>/\-".!']+)\]/gm, function(str, numMatch, innerText) {
            var num = parseInt(numMatch, 10) - 1;
            return '<span style="color:' + colors[num] + ';">' + innerText + '</span>';
        });
    });

    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 150);

    imagesLoaded(document.querySelectorAll('projects-feed .project'), (instance) => {
        console.log(instance);
        instance.elements.forEach((element, index, arr) => {
            setTimeout(() => {
                element.classList.add('loaded');
            }, 50 + 150 * index);
        });
    });

    var a = document.getElementsByTagName('a');

    for (var index = 0; index < a.length; index++) {
        a.item(index).addEventListener('click', (e) => {
            if ((a.item(index).href == '') || (a.item(index).href == null)) {
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
})();