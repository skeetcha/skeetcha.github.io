import getBase from './base.js';
import parseMarkdown from './markdown.js';
import setupNavAnim from './nav_anim.js';
import setupLink from './link_setup.js';
import getPosts from './posts.js';

var converter = new showdown.Converter();

(function () {
    document.body.innerHTML = getBase(false, true, false, true);

    var postHash = window.location.hash.substring(1);
    var postData = getPosts();

    for (var i = 0; i < postData.length; i++) {
        if (postData[i].id === postHash) {
            postData = postData[i];
            break;
        } else if ((postData[i].id !== postHash) && (i == (postData.length - 1))) {
            postData = undefined;
        }
    }

    var title = '', author = '', date = '', content = '';

    if (postData !== undefined) {
        title = postData.title;
        author = postData.author;
        date = postData.date;
        content = postData.content;
    }

    document.querySelector('.site-tagline').innerHTML = `
        <h1 id="blog-post-title">${title}</h1>
        <h6 class="date"><span id="blog-post-author">${author}</span> | <span id="blog-post-date">${date}</span></h6>
    `;

    content = converter.makeHtml(content);
    var colors = ['#00eeff', '#fffb00', '#ff3e3e', '#ff70e7'];
        
    content = content.replaceAll(/!(\d)+\[([*A-Za-z0-9 <>/\-".!']+)\]/gm, function(str, numMatch, innerText) {
        var num = parseInt(numMatch, 10) - 1;
        return '<span style="color:' + colors[num] + ';">' + innerText + '</span>';
    });

    document.querySelector('.site-content').innerHTML = `
        <div class="page-desc" id="blog-post-content">${content}</div>
    `;

    document.querySelector('.site-container').innerHTML += `
        <div id="disqus_thread style="margin:0 auto;width:75%;">
            <script src="scripts/disqus.js"></script>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        </div>
    `;

    document.getElementById('foot-nav').innerHTML = `
        <ul class="cd-pagination animated-buttons custom-icons">
            <li class="button"><a href="#"><i>Prev</i></a></li>
            <li class="button"><a href="#"><i>Next</i></a></li>
        </ul>
    `;

    document.title = `C/B/F - ${title}`;

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