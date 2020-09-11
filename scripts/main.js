var update_texts = function() { $('body').i18n(); };
var get_lang_code = function(el) { return el.attributes["data-locale"].value; };

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
            "projects.title": "Projects",
            "projects.skills.label": "Skills:",
            "projects.skills.list": "Final Cut Pro X, Python, C#, Unity"
        },
        "de": {
            "socials.instagram": "Instagram",
            "socials.twitter": "Twitter",
            "socials.facebook": "Facebook",
            "menu.showcase": "Showcase",
            "menu.blog": "Blog",
            "menu.about": "Über",
            "menu.docs": "Docs",
            "menu.contact": "Kontaktieren",
            "title.message": "Hallo ich bin Daniel Unterholzner. Ich bin einen Märchenerzähler, der in Film, Theater, Videospiele, und Musik tatig bin.",
            "footer.copyright": "© Copyright Daniel Unterholzner 2020.",
            "project.mememachine.title": "Meme-Machine",
            "project.mememachine.description": "Memes herunterladen, bewerten, und schaffen - Programmierer",
            "project.mememachine.long-description.1": "",
            "project.mememachine.long-description.2": "",
            "project.mememachine.link": "",
            "project.shutin.title": "Shut In",
            "project.shutin.description": "Kurzfilm - Gaffer, Geräuschemacher, Tonmeister",
            "project.shutin.long-description.1": "",
            "project.shutin.long-description.2": "",
            "project.bulletrush.title": "Bullet Rush",
            "project.bulletrush.description": "Cuphead in Anlehnung an Ego-Shooter-Spiele - Programmierer, Projektleiter",
            "project.bulletrush.long-description.1": "",
            "project.bulletrush.long-description.2": "",
            "project.bulletrush.link": "",
            "projects.title": "",
            "projects.skills.label": "",
            "projects.skills.list": ""
        }
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
