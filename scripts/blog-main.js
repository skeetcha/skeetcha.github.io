var update_texts = function() { $('body').i18n(); };
var get_lang_code = function(el) { return el.attributes["data-locale"].value; };
var get_page = function(el) { return el.attributes["data-page"].value; };
var currentPage = 1;

jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
    });

    var pageNumber = window.location.hash.substr(1);
    var pages = $('.news');

    if (pageNumber === '') {
        pageNumber = '1';
    }

    for (var i = 0; i < pages.length; i++) {
        if ((get_page(pages[i]) === pageNumber) && (!pages[i].classList.contains('active-news-page'))) {
            pages[i].classList.add('active-news-page');
        } else if ((get_page(pages[i]) !== pageNumber) && (pages[i].classList.contains('active-news-page'))) {
            pages[i].classList.remove('active-news-page');
        }
    }

    if (pageNumber === '1') {
        $('#left-elipses').css('display', 'none');
    }

    if (pageNumber === '20') {
        $('#right-elipses').css('display', 'none');
    }

    currentPage = parseInt(pageNumber);

    $('.page-button').click(function(e) {
        e.preventDefault();
        window.location = 'blog.html#' + get_page($(this));
        window.location.reload();
    });
    
    $.i18n().load({
        "en": {
            "socials.instagram": "Instagram",
            "socials.twitter": "Twitter",
            "socials.facebook": "Facebook",

            "menu.showcase": "Showcase",
            "menu.blog": "Blog",
            "menu.about": "About",
            "menu.docs": "Docs",
            "menu.contact": "Contact",

            "title.message": "Hello I'm Daniel Unterholzner. I'm a storyteller working in the media of film, theatre, video games, and music.",

            "footer.copyright": "© Copyright Daniel Unterholzner 2020.",

            "project.mememachine.title": "Meme Machine",
            "project.mememachine.description": "Download, Rate, and Create Memes - Programmer",
            "project.mememachine.long-description.1": "This was a project created by the University of the Pacific chapter of the Association for Computing Machinery in March of 2017 to create a set of software to download and aggregate memes from different social media sites to which memes are uploaded, rate them by some sort of combined metric made up of data from each of the different sites, and then use all of that data to then create its own memes. The project was discontinued roughly a month later.",
            "project.mememachine.long-description.2": "The project uses primarily Python in its code, although one of us wanted to use Haskell to download memes from ImgFlip's meme generator. I looked a little at Haskell although I wouldn't say that I can explain line by line what the code does.",
            "project.mememachine.link": "GitHub Repository",

            "project.shutin.title": "Shut In",
            "project.shutin.description": "Short Film - Gaffer, Foley Artist, Sound Editor",
            "project.shutin.long-description.1": "This was a short film created as part of the Go Film! Workshop held at the San Joaquin County Office of Education in June 2012. During the first of two weeks, we learned the fundamentals of creating a short film and then we pitched our projects and chose what would end up being the final product. The second week then comprised of pre-production, filming over the course of a full day on-location at a daycare in Manteca, CA, and then finishing up post-production until late into the night.",
            "project.shutin.long-description.2": "The film was then premiered at the Lincoln High School theatre to a packed house after which the crew got up on stage and held a short Q+A session with the audience. As far as I'm aware (as I was not told about this and found out through social media), the short film was also entered into a short film contest in which it won an award.",

            "project.bulletrush.title": "Bullet Rush",
            "project.bulletrush.description": "Cuphead meets First Person Shooter games - Programmer, Project Manager",
            "project.bulletrush.long-description.1": "During the Fall 2019 semester, I took the Computer Game Technologies course at University of the Pacific where I learned both Video Game Design and Development. We were to pitch ideas to the class and then everyone voted on which projects they wanted to work on and what roles they had desired. Since I had already worked as a Project Manager on my Application Development team (even though I was never officially designated as such), I chose that role. I was assigned to the Bullet Rush team and oversaw the development of the game.",
            "project.bulletrush.long-description.2": "We were a small team of four working on this project with a Lead Programmer, a generic Programmer, and a Media Director also assigned to the project. Our final for the class consisted of our project showcase where our classmates (and anyone else we had invited) could play our games and give us feedback.",
            "project.bulletrush.link": "Bitbucket Respository",

            "project.dndcombatsim.title": "Dungeons and Dragons Combat Simulator",
            "project.dndcombatsim.description": "Combat simulator for the 5th Edition of the Tabletop RPG Dungeons and Dragons - Programmer, Project Manager",

            "projects.title": "Projects",
            "projects.skills.label": "Skills:",
            "projects.skills.list": "Final Cut Pro X, Python, C#, Unity",

            "about.quote": "\"Creativity is an energy. It's a precious energy, and it's something to be protected. A lot of people take for granted that they're a creative person, but I know from experience, feeling it in myself, it is a magic; it is an energy. And it can't be taken for granted.\" --Ava DuVernay",

            "about.bio.1": "Every person is a story, and storyteller Daniel Unterholzner is no different. He has been telling stories when he was younger. He pursued and is pursuing his creative cravings through short films, acting and playing music in musical theatre, developing and critiquing video games, and writing and recording music.",
            "about.bio.2": "Even before entering high school, Daniel participated in the a \"Go Film!\" workshop at the San Joaquin County Office of Education in Stockton, California learning about camera, lighting, and sound techniques. He worked with other teens to create and release a short film, as the Gaffer, the Foley Artist, and a Sound Editor. In high school, Daniel took a class expanding his film knowledge in creating the school's announcements. After graduating, he started a YouTube channel where he posted short videos.",
            "about.bio.3": "Along with working in film, Daniel also participated in musical theatre. He appeared in many productions starting in 2007 with \"Dear Edwina Jr\" at Stockton Civic Theatre as well as many church musicals. In 2009, Daniel starred in \"The Music Man\" for a senior project in Manteca, California. Later, he was cast as Professor Quirrel and was set to be the Musical Director for a production of \"A Very Potter Musical\" while directing and developing a Murder Mystery Dinner containing mostly improvised scenes.",
            "about.bio.4": "Daniel has always been interested in video game development and design as he played them often throughout his adolescence. This interest flourished and inspired him to major in Computer Science, first at San Joaquin Delta College and then University of the Pacific. He ended up switching his major to Media X to further pursue his passions. During his coursework, he worked with classmates to develop two games: a combat simulator for the tabletop role-playing game Dungeons and Dragons and a bullet-dodging game like the video game Cuphead. Daniel intends to continue using video games as an alternate form of storytelling in the future.",
            "about.bio.5": "Music has always been part of Daniel's life. Inspired by his older sister taking lessons, he decided to learn piano at age 5. He later picked up more instruments such as the clarinet, the cello, and the guitar. Daniel was active in his high school's band program where he took to arranging and writing for his school's wind ensemble and jazz band. He also played cello often in college and assisted East Union High School's theatre class in a production of \"Next to Normal.\" In 2019, Daniel sent a video of him playing an original song to the University of the Pacific’s student association. This resulted in Daniel playing both original and cover songs at their Brickyard Series concert. Daniel now writes indie pop music in his spare time.",
            "about.bio.6": "Daniel hopes to further his storytelling career using his YouTube channel talking about gaming, music, and languages. His free time consists of learning German, American Sign Language, Spanish, and Italian. When he's not crafting fantasy novels, Daniel plays and runs sessions of various tabletop role-playing games for which he hopes to develop a podcast in the future.",

            "blog.title": "Personal Blog",
            "blog.description": "Random postings, news, and other thoughts",

            "nav.previous": "Prev",
            "nav.portfolio": "Portfolio",
            "nav.next": "Next",

            "nav.page.1": "Page 1",
            "nav.page.2": "Page 2",
            "nav.page.3": "Page 3",
            "nav.page.4": "Page 4",
            "nav.page.20": "Page 20",

            "blog.post.1.title": "",
            "blog.post.1.author": "",
            "blog.post.1.date": "",
            "blog.post.1.text": "",

            "blog.post.2.title": "",
            "blog.post.2.author": "",
            "blog.post.2.date": "",
            "blog.post.2.text": "",

            "blog.post.3.title": "",
            "blog.post.3.author": "",
            "blog.post.3.date": "",
            "blog.post.3.text": ""
        },
        "de": {}
    });

    if (localStorage.getItem('locale') !== null) {
        $.i18n().locale = localStorage.getItem('locale');
        var arr = $('.lang-switch-parent');

        for (var i = 0; i < arr.length; i++) {
            if (get_lang_code(arr[i].children[0]) === localStorage.getItem('locale')) {
                if (!arr[i].classList.contains('active')) {
                    arr[i].classList.add('active');
                }
            } else {
                if (arr[i].classList.contains('active')) {
                    arr[i].classList.remove('active');
                }
            }
        }
    }

    update_texts();

    $('.lang-switch').click(function(e) {
        e.preventDefault();
        $.i18n().locale = $(this).data('locale');
        update_texts();
        localStorage.setItem('locale', $(this).data('locale'));
        var arr = $('.lang-switch-parent');

        for (var i = 0; i < arr.length; i++) {
            if (get_lang_code(arr[i].children[0]) === localStorage.getItem('locale')) {
                if (!arr[i].classList.contains('active')) {
                    arr[i].classList.add('active');
                }
            } else {
                if (arr[i].classList.contains('active')) {
                    arr[i].classList.remove('active');
                }
            }
        }
    });
});

! function(a) {
    "use strict";
    a(document).ready(function() {
        function b() {
            window.location = i
        }
        var e = a(".site-title"),
            f = a("body");
        setTimeout(function() {
            f.addClass("loaded")
        }, 150);
        var g = a(".project-assets").children("div");
        a.each(g, function(b, c) {
            var d = a(this);
            d.imagesLoaded(function() {
                setTimeout(function() {
                    d.addClass("loaded")
                }, 50 + 150 * b)
            })
        });
        var h = a(".projects-feed .project");
        a.each(h, function(b, c) {
            var d = a(this);
            d.imagesLoaded(function() {
                setTimeout(function() {
                    d.addClass("loaded")
                }, 50 + 50 * b)
            })
        });
        var i;
        a("a").on("click", function(a) {
            return "" == this.href || null == this.href ? void a.preventDefault() : void(-1 == this.href.indexOf("#") && -1 == this.href.indexOf("mailto:") && -1 == this.href.indexOf("javascript:") && "_blank" != this.target && (a.preventDefault(), i = this.href, f.removeClass("loaded"), setTimeout(b, 250)))
        })
    })
}(window.jQuery);
