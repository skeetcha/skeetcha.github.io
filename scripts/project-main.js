var update_texts = function() { $('body').i18n(); };
var get_lang_code = function(el) { return el.attributes["data-locale"].value; };
var projectNames = ['fourwoods', 'mememachine', 'shutin', 'bulletrush', 'dndcombatsim', 'cansat'];

function previousProject(event) {
    event.preventDefault();
    var projectName = window.location.hash.substr(1);
    var anonName = 'project-' + (projectNames.indexOf(projectName) + 1).toString();
    var lastAnonName = 'project-' + projectNames.indexOf(projectName).toString();

    if (projectNames.indexOf(projectName) == 0) {
        window.location = 'portfolio-item.html#' + projectName;
        $('html, body').animate({scrollTop: 0}, 250);
    } else {
        var newProjectName = projectNames[projectNames.indexOf(projectName) - 1];
        window.location = 'portfolio-item.html#' + newProjectName;
        $('html, body').animate({scrollTop: 0}, {duration: 250, queue: false});
        $('#' + anonName).animate({opacity: 0}, 125, function() {
            $('#' + anonName).removeClass('active-project');
            $('#skills-label').data('i18n', '[html]project.' + newProjectName + '.skills');
            $('#skills-label').i18n();
            $('#' + lastAnonName).animate({opacity: 1}, 125, function() {
                $('#' + lastAnonName).addClass('active-project');
            });
        });
    }
}

function nextProject(event) {
    event.preventDefault();
    var projectName = window.location.hash.substr(1);
    var anonName = 'project-' + (projectNames.indexOf(projectName) + 1).toString();
    var nextAnonName = 'project-' + (projectNames.indexOf(projectName) + 2).toString();

    if (projectNames.indexOf(projectName) == (projectNames.length - 1)) {
        window.location = 'portfolio-item.html#' + projectName;
        $('html, body').animate({scrollTop: 0}, 250);
    } else {
        var newProjectName = projectNames[projectNames.indexOf(projectName) + 1];
        window.location = 'portfolio-item.html#' + newProjectName;
        $('html, body').animate({scrollTop: 0}, {duration: 250, queue: false});
        $('#' + anonName).animate({opacity: 0}, 125, function() {
            $('#' + anonName).removeClass('active-project');
            $('#skills-label').data('i18n', '[html]project.' + newProjectName + '.skills');
            $('#skills-label').i18n();
            $('#' + nextAnonName).animate({opacity: 1}, 125, function() {
                $('#' + nextAnonName).addClass('active-project');
            });
        });
    }
}

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

    var projectName = 'project-' + (projectNames.indexOf(window.location.hash.substr(1)) + 1).toString();
    
    if (!($('#' + projectName).hasClass('active-project'))) {
        $('.active-project').removeClass('active-project');
        $('#' + projectName).addClass('active-project');
    }

    $('.button:first-of-type a').click(previousProject);
    $('.button:last-of-type a').click(nextProject);

    $.i18n().parser = {
        parse: function(message, parameters) {
            var newmsg = message.replace(/\$(\d+)/g, function (str, match) {
                var index = parseInt(match, 10) - 1;
                return parameters[index] !== undefined ? parameters[index] : '$' + match;
            });

            var converter = new showdown.Converter();
            var convertedMsg = converter.makeHtml(newmsg).replace('<p>', '<div>').replace('</p>', '</div>');
            var colors = ['#00eeff', '#fffb00', '#ff3e3e', '#ff70e7'];

            return convertedMsg.replaceAll(/!(\d)+\[([*A-Za-z0-9 <>/]+)\]/gm, function(str, numMatch, innerText) {
                var num = parseInt(numMatch, 10) - 1;
                return '<span style="color:' + colors[num] + ';">' + innerText + '</span>';
            });
        },
        emitter: {}
    };

    $.i18n().load(language_data);
    $('#skills-label').data('i18n', '[html]project.' + window.location.hash.substr(1) + '.skills');

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
