import getBase from './base.js';
import getProject from './project.js';
import parseMarkdown from './markdown.js';
import setupNavAnim from './nav_anim.js';
import setupLink from './link_setup.js';

function getProjectName() {
    var lookup = window.location.hash.substring(1);

    if (lookup == 'fourWoods-s1e1') {
        return 'The Four Woods S1E1 - Call of the Ocean';
    }

    return '';
}

function getAudioCredits() {
    var lookup = window.location.hash.substring(1);

    if (lookup == 'fourWoods-s1e1') {
        return `
            <h3>Music</h3>
            <p class="markdown">Darkest Child by Kevin MacLeod  \nLink: [https://incompetech.filmmusic.io/song/3615-darkest-child](https://incompetech.filmmusic.io/song/3615-darkest-child)  \nLicense: [https://filmmusic.io/standard-license](https://filmmusic.io/standard-license)\n\nDarkling by Kevin MacLeod  \nLink: [https://incompetech.filmmusic.io/song/3616-darkling](https://incompetech.filmmusic.io/song/3616-darkling)  \nLicense: [https://filmmusic.io/standard-license](https://filmmusic.io/standard-license)\n\nDark Walk by Kevin MacLeod  \nLink: [https://incompetech.filmmusic.io/song/3612-dark-walk](https://incompetech.filmmusic.io/song/3612-dark-walk)  \nLicense: [https://filmmusic.io/standard-license](https://filmmusic.io/standard-license)\n\nIndustrial Cinematic by Kevin MacLeod  \nLink: [https://incompetech.filmmusic.io/song/3909-industrial-cinematic](https://incompetech.filmmusic.io/song/3909-industrial-cinematic)  \nLicense: [https://filmmusic.io/standard-license](https://filmmusic.io/standard-license)\n\nSolace by Scott Buckley [https://soundcloud.com/scottbuckley](https://soundcloud.com/scottbuckley)  \nCreative Commons — Attribution 3.0 Unported — CC BY 3.0  \nFree Download / Stream: [https://bit.ly/s-b-solace](https://bit.ly/s-b-solace)  \nMusic promoted by Audio Library [https://youtu.be/x8h50E6ekR0](https://youtu.be/x8h50E6ekR0)\n\nTimeless by Neutrin05 [https://soundcloud.com/neutrin05](https://soundcloud.com/neutrin05)  \nCreative Commons — Attribution 3.0 Unported — CC BY 3.0  \nFree Download / Stream: [http://bit.ly/\\_-timeless](http://bit.ly/_-timeless)  \nMusic promoted by Audio Library [https://youtu.be/\\_6kFem21DxU](https://youtu.be/_6kFem21DxU)\n\nTrio for Piano, Cello, and Clarinet by Kevin MacLeod  \nLink: [https://incompetech.filmmusic.io/song/4547-trio-for-piano-cello-and-clarinet](https://incompetech.filmmusic.io/song/4547-trio-for-piano-cello-and-clarinet)  \nLicense: [https://filmmusic.io/standard-license](https://filmmusic.io/standard-license)\n\nVirtutes Instrumenti by Kevin MacLeod  \nLink: [https://incompetech.filmmusic.io/song/4590-virtutes-instrumenti](https://incompetech.filmmusic.io/song/4590-virtutes-instrumenti)  \nLicense: [https://filmmusic.io/standard-license](https://filmmusic.io/standard-license)</p>
            <h3>Sound Effects</h3>
            <p class="markdown">Cave Ambience Sound Effect licensed under the Creative Commons 3.0 Attribution License [here](https://freesound.org/people/LittleRobotSoundFactory)\n\nDoor Close Sound Effect licensed under the Creative Commons 3.0 Attribution license [here](https://freesound.org/people/InspectorJ)\n\nDoor Open Sound Effect licensed under the Creative Commons 3.0 Attribution license [here](https://freesound.org/people/InspectorJ)\n\nDrawer Open Sound Effect licensed under the Creative Commons 3.0 Attribution License [here](https://freesound.org/people/dersuperanton)\n\nConcrete Footsteps Sound Effect licensed under the Creative Commons 3.0 Attribution License [here](https://freesound.org/people/InspectorJ)\n\nKeyboard Typing Sound Effect licensed under the Creative Commons 3.0 Attribution License [here](https://freesound.org/people/GeorgeHopkins)\n\nLibrary Ambience Sound Effect licensed under the Creative Commons 3.0 Attribution License [here](https://freesound.org/people/Meepalicious)\n\nMagic Sparkle Sound Effect licensed under the Creative Commons 3.0 Attribution License [here](https://freesound.org/people/RICHERlandTV)\n\nNoisy Street Sound Effect licensed under the Creative Commons 3.0 Attribution License [here](https://freesound.org/people/Tomlija)\n\nOutdoor Ambience Sound Effect licensed under the Creative Commons 3.0 Attribution License [here](https://freesound.org/people/daenerys)\n\nPaper Rustling Sound Effect licensed under the Creative Commons 3.0 Attribution License [here](https://freesound.org/people/vedas)\n\nWater Splashing Sound Effect licensed under the Creative Commons 3.0 Attribution License [here](https://freesound.org/people/dobroide)</p>
        `;
    }

    return '';
}

(function() {
    document.body.innerHTML = getBase(false, false, false, false);
    var projectName = getProjectName();
    var audioCredits = getAudioCredits();
    document.querySelector('.site-content').innerHTML = `
        <div class="page-desc">
            <h1>Audio Credits - ${projectName}</h1>
            ${audioCredits}
        </div>
    `;

    setupNavAnim(document);
    parseMarkdown(document);

    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 150);

    setupLink(document);
})();