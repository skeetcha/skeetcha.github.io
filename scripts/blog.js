import getBase from './base.js';
import parseMarkdown from './markdown.js';
import setupNavAnim from './nav_anim.js';
import setupLink from './link_setup.js';
import getPosts from './posts.js';
import generateBlogPost from './blog_post.js';

var currentPage = 1;
var numPages = 1;

var get_page = (el) => {
    return el.dataset.page;
};

(function () {
    document.body.innerHTML = getBase(false, true, false, false);

    document.querySelector('.site-content').innerHTML = `
        <div class="page-desc">
            <h4>Personal Blog</h4>
            <a href="blog-rss.xml"<img src="img/rss-icon.png" alt="rss-icon" style="width:20px;height:20px;" /></a>
            <p>Random postings, news, and other thoughts coming soon!</p>
        </div>
    `;

    var postData = getPosts();
    postData.reverse();

    for (var i = 0; i < postData.length; i += 5) {
        document.querySelector('.site-content').innerHTML += `
            <article class="news" data-page="${(Math.floor(i / 5) + 1).toString()}">
            </article>
        `;

        document.querySelector(`.site-content .news[data-page="${(Math.floor(i / 5) + 1).toString()}"]`).innerHTML = generateBlogPost(postData[i]);

        if ((i + 1) < postData.length) {
            document.querySelector(`.site-content .news[data-page="${(Math.floor(i / 5) + 1).toString()}"]`).innerHTML += generateBlogPost(postData[i + 1]);
        }

        if ((i + 2) < postData.length) {
            document.querySelector(`.site-content .news[data-page="${(Math.floor(i / 5) + 1).toString()}"]`).innerHTML += generateBlogPost(postData[i + 2]);
        }

        if ((i + 3) < postData.length) {
            document.querySelector(`.site-content .news[data-page="${(Math.floor(i / 5) + 1).toString()}"]`).innerHTML += generateBlogPost(postData[i + 3]);
        }

        if ((i + 4) < postData.length) {
            document.querySelector(`.site-content .news[data-page="${(Math.floor(i / 5) + 1).toString()}"]`).innerHTML += generateBlogPost(postData[i + 4]);
        }
    }

    document.querySelector('.site-content .news[data-page="1"]').classList.add('active-news-page');

    document.getElementById('foot-nav').innerHTML = `
        <ul class="cd-pagination animated-buttons custom-icons">
            <li class="button"><a id="previous" href="#"><i data-i18n="[html]nav.previous">Prev</i></a></li>
            <li><a class="current page-button" href="#" data-i18n="[html]nav.page.1" data-page="1">1</a></li>
            <!--<li><span id="left-elipses">...</span></li>-->
            <li><a href="#" class="page-button" data-i18n="[html]nav.page.2" data-page="2">2</a></li>
            <!--<li><a href="#" class="page-button" data-i18n="[html]nav.page.3" data-page="3">3</a></li>
            <li><a href="#" class="page-button" data-i18n="[html]nav.page.4" data-page="4">4</a></li>
            <li><span id="right-elipses">...</span></li>
            <li><a href="#" class="page-button" data-i18n="[html]nav.page.20" data-page="20">20</a></li>-->
            <li class="button"><a id="next" href="#"><i data-i18n="[html]nav.next">Next</i></a></li>
        </ul>
    `;

    var pageNumber = window.location.hash.substring(1);
    var pages = document.querySelectorAll('.news');

    if (pageNumber === '') {
        pageNumber = '1';
    }

    for (var i = 0; i < pages.length; i++) {
        if ((get_page(pages[i]) === pageNumber) && (!pages[i].classList.contains('active-news-page'))) {
            pages[i].classList.add('active-news-page');

            if (!document.querySelectorAll('.page-button')[i].className.includes('current')) {
                document.querySelectorAll('.page-button')[i].classList.add('current');
            }
        } else if ((get_page(pages[i]) !== pageNumber) && (pages[i].classList.contains('active-news-page'))) {
            pages[i].classList.remove('active-news-page');

            if (document.querySelectorAll('.page-button')[i].className.includes('current')) {
                document.querySelectorAll('.page-button')[i].classList.remove('current');
            }
        }
    }

    if (pageNumber === '1') {
        //document.getElementById('left-elipses').style.display = 'none';
    }

    if (pageNumber === '20') {
        //document.getElementById('right-elipses').style.display = 'none';
    }

    currentPage = parseInt(pageNumber);
    numPages = parseInt(pages.length);

    document.querySelectorAll('.page-button').forEach((element, key, parent) => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            window.location = `blog.html#${get_page(element)}`;
            window.location.reload();
        }, false);
    });

    document.getElementById('previous').addEventListener('click', (e) => {
        e.preventDefault();
        var newPage = currentPage - 1;

        if (newPage === 0) {
            newPage = 1;
        }

        window.location = `blog.html#${newPage.toString()}`;
        window.location.reload();
    });

    document.getElementById('next').addEventListener('click', (e) => {
        e.preventDefault();
        var newPage = currentPage + 1;

        if (newPage > numPages) {
            newPage = numPages;
        }

        window.location = `blog.html#${newPage.toString()}`;
        window.location.reload();
    });

    document.querySelectorAll('.cd-primary-nav li a').forEach((element, key, parent) => {
        if (element.href.indexOf('blog.html') != -1) {
            element.classList.add('selected');
        } else {
            element.classList.remove('selected');
        }
    });

    setupNavAnim(document);
    parseMarkdown(document);

    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 150);

    setupLink(document);
})();