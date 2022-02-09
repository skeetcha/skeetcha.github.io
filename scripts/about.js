import getBase from './base.js';
import parseMarkdown from './markdown.js';
import setupNavAnim from './nav_anim.js';
import setupLink from './link_setup.js';

(function() {
    document.body.innerHTML = getBase(false, false, false, false);
    document.querySelector('.site-content').innerHTML = `
        <div class="page-desc">
            <p class="markdown">"Creativity is an energy. It's a precious energy, and it's something to be protected. A lot of people take for granted that they're a creative person, but I know from experience, feeling it in myself, it is a magic; it is an energy. And it can't be taken for granted." --Ava DuVernay</p>
            <img src="img/self.png" alt="" style="max-height:500px;" />
            <p class="markdown">Every person is a story, and storyteller Cass Unterholzner is no different. They have been telling stories since they were younger. Their creative cravings have been sought after through !1[**short films**], !2[**acting**] and playing music in !2[**musical theatre**], !3[**developing**] and critiquing !3[**video games**], and !4[**writing**] and !4[**recording music**].\n\n\n\nCass is currently producing an !2[**audio drama podcast**] titled The Four Woods Podcast after developing it as a serial novel story with inspirations from the Harry Potter and Percy Jackson novels.\n\n\n\nEven before entering high school, Cass participated in the !1[**"Go Film!"**] workshop at the San Joaquin County Office of Education in Stockton, California learning about !1[**camera**], !1[**lighting**], and !1[**sound techniques**]. They worked with other teens to create and release a !1[**short film**], as the !1[**Gaffer**], the !1[**Foley Artist**], and a !1[**Sound Editor**]. In high school, Cass took a class expanding their !1[**film**] knowledge in creating the school's announcements. After graduating, they started a !1[**YouTube channel**] where they posted !1[**short videos**].\n\n\n\nAlong with working in !1[**film**], Cass also participated in !2[**musical theatre**]. They appeared in many productions starting in 2007 with !2[**"Dear Edwina Jr"**] at Stockton Civic Theatre as well as many !2[**church musicals**]. In 2009, Cass starred in !2[**"The Music Man"**] for a senior project in Manteca, California. Later, they were cast as !2[**Professor Quirrel**] and were set to be the !2[**Musical Director**] for a production of !2[**"A Very Potter Musical"**] while directing and developing a !2[**Murder Mystery Dinner**] containing mostly improvised scenes.\n\n\n\nCass has always been interested in !3[**video game development and design**] as they played them often throughout their adolescence. This interest flourished and inspired them to major in !3[**Computer Science**], first at San Joaquin Delta College and then University of the Pacific. They ended up switching their major to Media X to further pursue their passions. During their coursework, they worked with classmates to !3[**develop two games**]: a !3[**combat simulator**] for the tabletop role-playing game Dungeons and Dragons and a !3[**bullet-dodging game**] like the video game Cuphead. Cass intends to continue using !3[**video games**] as an alternate form of storytelling in the future.\n\n\n\n!4[**Music**] has always been part of Cass's life. Inspired by their older sister taking lessons, they decided to learn !4[**piano**] at age 5. They later picked up more instruments such as the !4[**clarinet**], the !4[**cello**], and the !4[**guitar**]. Cass was active in his !4[**high school's band**] program where they took to !4[**arranging**] and !4[**writing**] for their school's !4[**wind ensemble**] and !4[**jazz band**]. They also played !4[**cello**] often in college and assisted East Union High School's !2[**theatre class**] in a production of !2[**"Next to Normal."**] In 2019, Cass sent a video of him playing an !4[**original song**] to the University of the Pacific’s student association. This resulted in Cass playing both !4[**original**] and !4[**cover songs**] at their !4[**Brickyard Series concert**]. Cass now writes !4[**indie pop music**] in their spare time.\n\n\n\nCass hopes to further their storytelling career using their !1[**YouTube channel**] talking about !3[**gaming**], !4[**music**], and languages. Their free time consists of learning German, American Sign Language, Spanish, and Italian. When they're not crafting fantasy novels, Cass plays and runs sessions of various tabletop role-playing games for which they hope to develop a podcast in the future.</p>
        </div>
    `;

    document.querySelectorAll('.cd-primary-nav li a').forEach((element, key, parent) => {
        if (element.href.indexOf('about.html') != -1) {
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