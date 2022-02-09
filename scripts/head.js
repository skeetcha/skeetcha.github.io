function getHeader(is_index) {
    if (is_index) {
        return `
            <header class="site-header cf">
                <div class="site-title"><a href="index.html">C/B/F</a></div>
                <div class="cf"></div>
                <div class="site-tagline">
                    <p><strong>CityboundForest</strong></p><div style="font-size:18pt;" class="markdown">Hello I'm **Cass Unterholzner.**  \nI'm a storyteller working in the media of !1[**film**], !2[**theatre**], !3[**video games**], and !4[**music**].</div>
                </div>
            </header>
        `;
    } else {
        return `
            <header class="site-header cf">
                <div class="site-title"><a href="index.html">C/B/F</a></div>
                <div class="cf"></div>
            </header>
        `;
    }
}

export default getHeader;