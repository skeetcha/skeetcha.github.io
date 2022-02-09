import getNav from './nav.js';
import getHeader from './head.js';
import getFoot from './foot.js';

function getBase(is_index, add_nav) {
    if (add_nav) {
        return `
            ${getNav()}
            <div class="site-container">
                ${getHeader(is_index)}
                <section class="site-content">
                </section>
                <nav role="navigation" id="foot-nav">
                </nav>
                ${getFoot()}
            </div>
        `;
    } else {
        return `
            ${getNav()}
            <div class="site-container">
                ${getHeader(is_index)}
                <section class="site-content">
                </section>
                ${getFoot()}
            </div>
        `;
    }
}

export default getBase;