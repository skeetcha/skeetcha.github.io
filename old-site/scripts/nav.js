function getNav() {
    return `
        <a href="#cd-nav" class="cd-nav-trigger">Menu 
            <span class="cd-nav-icon"></span>
            <svg x="0px" y="0px" width="54px" height="54px" viewBox="0 0 54 54">
                <circle fill="transparent" stroke="#90D4C5" stroke-width="2" cx="27" cy="27" r="25" stroke-dasharray="157 157" stroke-dashoffset="157"></circle>
            </svg>
        </a>
        <div id="cd-nav" class="cd-nav">
            <div class="cd-navigation-wrapper">
                <div class="cd-half-block">
                    <nav>
                        <ul class="cd-primary-nav">
                            <li><a href="index.html" class="selected">Showcase</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="cd-half-block">
                    <address>
                        <ul class="cd-contact-info">
                            <li><a href="mailto:cityboundforest@gmail.com">cityboundforest@gmail.com</a></li>
                        </ul>
                        <ul class="cd-contact-socials">
                            <li><a href="https://instagram.com/cityboundforest" target="_blank" rel="noopener noreferrer">Instagram</a></li>   
                            <li><a href="https://twitter.com/cityboundforest" target="_blank" rel="noopener noreferrer">Twitter</a></li>   
                            <li><a href="https://facebook.com/cityboundforest" target="_blank" rel="noopener noreferrer">Facebook</a></li>    
                            <li><a href="https://www.youtube.com/channel/UCexbz2BYv_lMV1PP_Pdf7_g" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                            <li><a href="https://tiktok.com/@cityboundforest" target="_blank" rel="noopener noreferrer">TikTok</a></li>
                            <li><a href="https://twitch.tv/cityboundforest" target="_blank" rel="noopener noreferrer">Twitch</a></li>
                            <li><a rel="me" href="https://mastodon.social/@cityboundforest" target="_blank">Mastodon</a></li>
                        </ul>
                    </address>
                </div>
            </div>
        </div>
    `;
}

export default getNav;