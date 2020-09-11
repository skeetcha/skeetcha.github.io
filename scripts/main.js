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
            "project.mememachine.long-description": "This was a project created by the University of the Pacific chapter of the Association for Computing Machinery in March of 2017 to create a set of software to download and aggregate memes from different social media sites to which memes are uploaded, rate them by some sort of combined metric made up of data from each of the different sites, and then use all of that data to then create its own memes. The project was discontinued roughly a month later.",
            "project.shutin.title": "Shut In",
            "project.shutin.description": "Short Film - Gaffer, Foley Artist, Sound Editor",
            "project.bulletrush.title": "Bullet Rush",
            "project.bulletrush.description": "Cuphead meets First Person Shooter games - Programmer, Project Manager",
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
            "project.mememachine.long-description": "",
            "project.shutin.title": "Shut In",
            "project.shutin.description": "Kurzfilm - Gaffer, Geräuschemacher, Tonmeister",
            "project.bulletrush.title": "Bullet Rush",
            "project.bulletrush.description": "Cuphead in Anlehnung an Ego-Shooter-Spiele - Programmierer, Projektleiter",
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
});

// Add the rest of the tutorial from here: https://phrase.com/blog/posts/step-step-guide-javascript-localization/

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

$('.lang-switch').click(function(e) {
    e.preventDefault();
    $.i18n().locale = $(this).data('locale');
    update_texts();
    localStorage.setItem('locale', $(this).data('locale'));
    window.location.reload();
});