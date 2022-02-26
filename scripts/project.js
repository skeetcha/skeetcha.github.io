function getProject(data) {
    console.assert(data.id !== undefined, {message: 'Expected id', data: data});
    console.assert(data.title !== undefined, {message: 'Expected title', data: data});
    console.assert(data.description !== undefined, {message: 'Expected description', data: data});

    return `
        <article class="project cf">
            <a href="portfolio-item.html#${data.id}" title="${data.id}">
                <div class="thumb">
                    <div data-picture data-alt="">
                        <div data-src="img/${data.id}.png"></div>
                        <!--[if (lt IE 9) & (!IEMoble)]>
                            <div data-src="img/${data.id}.png"></div>
                        <![endif]-->
                        <noscript>
                            <img src="img/${data.id}.png" alt="" />
                        </noscript>
                    </div>
                </div>
                <div class="project-content-container">
                    <div class="project-content">
                        <div class="table">
                            <div class="table-cell">
                                <h2 class="thumbnail-title">${data.title}</h2>
                                <p class="thumbnail-description">${data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overlay"></div>
            </a>
        </article>
    `;
}

export default getProject;