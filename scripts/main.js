import getBase from './base.js';
import getProject from './project.js';
import parseMarkdown from './markdown.js';
import setupNavAnim from './nav_anim.js';
import setupLink from './link_setup.js';

(function () {
    document.body.innerHTML = getBase(true);
    document.querySelector('.site-content').innerHTML = `<div class="projects-feed cf"></div>`;

    var projects = [{id: 'fourwoods', title: 'The Four Woods Podcast', description: 'An audio drama podcast about myth and magic - Writer, Director, Editor, Producer'}, {id: 'mememachine', title: 'Meme Machine', description: 'Download, Rate, and Create Memes - Programmer'}, {id: 'shutin', title: 'Shut In', description: 'Short Film - Gaffer, Foley Artist, Sound Editor'}, {id: 'bulletrush', title: 'Bullet Rush', description: 'Cuphead meets First Person Shooter games - Programmer, Project Manager'}, {id: 'dndcombatsim', title: 'Dungeons and Dragons Combat Simulator', description: 'Combat simulator for the 5th Edition of the Tabletop RPG Dungeons and Dragons - Programmer, Project Manager'}, {id: 'cansat', title: 'CanSat', description: 'A simulated sattelite in an enclosure the shape and size of a soda can - Programmer'}];

    for (var i = 0; i < projects.length; i++) {
        document.querySelector('.projects-feed.cf').innerHTML += getProject(projects[i]);
    }

    setupNavAnim(document);
    parseMarkdown(document);

    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 150);

    imagesLoaded('projects-feed .project', (instance) => {
        document.querySelectorAll('.projects-feed .project').forEach((element, key, parent) => {
            setTimeout(() => {
                element.classList.add('loaded');
            }, 50 + 50 * key);
        });
    });

    setupLink(document);
})();