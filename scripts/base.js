import getNav from './nav.js';
import getHeader from './head.js';
import getFoot from './foot.js';

function getBase(is_index) {
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

export default getBase;