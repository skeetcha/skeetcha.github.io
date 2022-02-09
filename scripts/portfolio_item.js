import getBase from './base.js';
import parseMarkdown from './markdown.js';
import setupNavAnim from './nav_anim.js';
import setupLink from './link_setup.js';
import getProjectData from './project_data.js';
import generateProject from './portfolio_project.js';

var projectNames = ['fourwoods', 'mememachine', 'shutin', 'bulletrush', 'dndcombatsim', 'cansat'];

function previousProject(e) {
    e.preventDefault();
    var projectName = window.location.hash.substring(1);
    var anonName = `project-${(projectNames.indexOf(projectName) + 1).toString()}`;
    var lastAnonName = `project-${projectNames.indexOf(projectName).toString()}`;

    if (projectNames.indexOf(projectName) == 0) {
        window.location = `portfolio-item.html#${projectName}`;
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        var newProjectName = projectNames[projectNames.indexOf(projectName) - 1];
        window.location = `portfolio-item.html#${newProjectName}`;
        window.scrollTo({top: 0, behavior: 'smooth'});
        document.getElementById(anonName).style.transition = 'opacity 0.125s';
        document.getElementById(anonName).style.opacity = 0;

        setTimeout(() => {
            document.getElementById(anonName).classList.remove('active-project');
            var projectData = getProjectData(newProjectName);
            document.getElementById('skills-label').innerHTML = projectData.skills;
            document.getElementById(lastAnonName).style.transition = 'opacity 0.125s';
            document.getElementById(lastAnonName).style.opacity = 1;

            setTimeout(() => {
                document.getElementById(lastAnonName).classList.add('active-project');
            }, 125);
        }, 125);
    }
}

function nextProject(e) {
    e.preventDefault();
    var projectName = window.location.hash.substring(1);
    var anonName = `project-${(projectNames.indexOf(projectName) + 1).toString()}`;
    var nextAnonName = `project-${(projectNames.indexOf(projectName) + 2).toString()}`;

    if (projectNames.indexOf(projectName) == (projectNames.length - 1)) {
        window.location = `portfolio-item.html#${projectName}`;
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        var newProjectName = projectNames[projectNames.indexOf(projectName) + 1];
        window.location = `portfolio-item.html#${newProjectName}`;
        document.getElementById(anonName).style.transition = 'opacity 0.125s';
        document.getElementById(anonName).style.opacity = 0;

        setTimeout(() => {
            document.getElementById(anonName).classList.remove('active-project');
            var projectData = getProjectData(newProjectName);
            document.getElementById('skills-label').innerHTML = projectData.skills;
            document.getElementById(nextAnonName).style.transition = 'opacity 0.125s';
            document.getElementById(nextAnonName).style.opacity = 1;

            setTimeout(() => {
                document.getElementById(nextAnonName).classList.add('active-project');
            }, 125);
        }, 125);
    }
}

(function () {
    document.body.innerHTML = getBase(false, true);

    document.querySelector('.site-content').innerHTML = `
        <div class="page-desc">
            <h1>Projects</h1>
            <p>Skills:</p>
            <p id="skills-label"></p>
        </div>
    `;

    for (var i = 0; i < projectNames.length; i++) {
        var projectData = generateProject(projectNames[i], i);
        document.querySelector('.site-content').innerHTML += projectData.data;

        for (var j = 0; j < projectData.links.length; j++) {
            if (projectData.links[j].href == '') {
                document.querySelector(`#project-${(i + 1).toString()} .project-content-container .project-content .table .table-cell`).innerHTML += `<div>${projectData.links[j].title}</div>`;
            } else {
                document.querySelector(`#project-${(i + 1).toString()} .project-content-container .project-content .table .table-cell`).innerHTML += `<div><a href="${projectData.links[j].href}">${projectData.links[j].title}</a></div>`;
            }
        }

        for (var j = 0; j < projectData.embeds.length; j++) {
            document.querySelector(`#project-${(i + 1).toString()} .project-content-container .project-content .table .table-cell`).innerHTML += `
                <div class="embed embed-16by9">
                    <iframe src="${projectData.embeds[j]}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="embed-item">Your device does not support iframes.</iframe>
                </div>
            `;
        }
    }

    document.getElementById('project-1').classList.add('active-project');

    document.querySelector('#foot-nav').innerHTML = `
        <ul class="cd-pagination animated-buttons custom-icons">
            <li class="button"><a href="#"><i>Prev</i></a></li>
            <li class="button-main"><a href="index.html"><i>Portfolio</i></a></li>
            <li class="button"><a href="#"><i>Next</i></a></li>
        </ul>
    `;

    setupNavAnim(document);

    var projectName = `project-${(projectNames.indexOf(window.location.hash.substring(1)) + 1).toString()}`;

    if (!document.getElementById(projectName).classList.contains('active-project')) {
        document.querySelectorAll('.active-project').forEach((element, key, parent) => {
            element.classList.remove('active-project');
        });

        document.getElementById(projectName).classList.add('active-project');
    }

    document.querySelector('.button:first-of-type a').addEventListener('click', previousProject, false);
    document.querySelector('.button:last-of-type a').addEventListener('click', nextProject, false);

    document.getElementById('skills-label').innerHTML = getProjectData(window.location.hash.substring(1)).skills;

    parseMarkdown(document);

    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 150);

    setupLink(document);
})();