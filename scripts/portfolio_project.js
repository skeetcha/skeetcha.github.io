import getProjectData from './project_data.js';

function generateProject(name, index) {
    var projectData = getProjectData(name);

    return {data: `
        <article class="project project-page cf" id="project-${(index + 1).toString()}">
            <div class="thumb">
                <div data-picture data-alt="">
                    <div data-src="img/${name}.png"></div>
                    <!--if (lt IE 9) & (!IEMobile)]>
                        <div data-src="img/${name}.png">/div>
                    <![endif]-->
                    <noscript>
                        <img src="img/${name}.png" alt="" />
                    </noscript>
                </div>
            </div>
            <div class="project-content-container">
                <div class="project-content">
                    <div class="table">
                        <div class="table-cell">
                            <h2 class="thumbnail-title">${projectData.title}</h2>
                            <p>${projectData.longDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    `, links: projectData.links, embeds: projectData.embeds};
}

export default generateProject;