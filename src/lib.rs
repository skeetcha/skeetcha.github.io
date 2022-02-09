use wasm_bindgen::prelude::*;
use web_sys;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

fn create_nav1_link(document: &web_sys::Document, ul: &web_sys::Element, loc: &str, i18n: &str, text: &str) -> Result<(), JsValue> {
    let li = document.create_element("li")?;
    let li_a = document.create_element("a")?;
    li_a.set_attribute("href", loc)?;
    li_a.set_class_name("selected");
    li_a.set_attribute("data-i18n", i18n)?;
    li_a.set_text_content(Some(text));
    let li_a_node = web_sys::Node::from(li_a);
    li.append_child(&li_a_node)?;
    let li_node = web_sys::Node::from(li);
    ul.append_child(&li_node)?;

    Ok(())
}

fn create_nav2_link(document: &web_sys::Document, ul: &web_sys::Element, loc: &str, is_mastodon: bool, text: &str, i18n: &str) -> Result<(), JsValue> {
    let li = document.create_element("li")?;
    let li_a = document.create_element("a")?;
    li_a.set_attribute("href", loc)?;
    li_a.set_attribute("data-i18n", i18n)?;
    li_a.set_attribute("target", "_blank")?;

    if is_mastodon {
        li_a.set_attribute("rel", "me")?;
    } else {
        li_a.set_attribute("rel", "noopener noreferrer")?;
    }

    li_a.set_text_content(Some(text));
    let li_a_node = web_sys::Node::from(li_a);
    li.append_child(&li_a_node)?;
    let li_node = web_sys::Node::from(li);
    ul.append_child(&li_node)?;

    Ok(())
}

fn gen_nav(document: &web_sys::Document, body: &web_sys::HtmlElement) -> Result<(), JsValue> {
    let val = document.create_element("a")?;
    val.set_attribute("href", "#cd-nav")?;
    val.set_class_name("cd-nav-trigger");
    val.set_text_content(Some("Menu"));

    let val2 = document.create_element("span")?;
    val2.set_class_name("cd-nav-icon");
    let val2_node = web_sys::Node::from(val2);
    val.append_child(&val2_node)?;

    let val3 = document.create_element("svg")?;
    val3.set_attribute("x", "0px")?;
    val3.set_attribute("y", "0px")?;
    val3.set_attribute("width", "54px")?;
    val3.set_attribute("height", "54px")?;
    val3.set_attribute("viewBox", "0 0 54 54")?;

    let val3_circle = document.create_element("circle")?;
    val3_circle.set_attribute("fill", "transparent")?;
    val3_circle.set_attribute("stroke", "#90D4C5")?;
    val3_circle.set_attribute("stroke-width", "2")?;
    val3_circle.set_attribute("cx", "27")?;
    val3_circle.set_attribute("cy", "27")?;
    val3_circle.set_attribute("r", "25")?;
    val3_circle.set_attribute("stroke-dasharray", "157 157")?;
    val3_circle.set_attribute("stroke-dashoffset", "157")?;
    let val3_circle_node = web_sys::Node::from(val3_circle);
    val3.append_child(&val3_circle_node)?;

    let val3_node = web_sys::Node::from(val3);
    val.append_child(&val3_node)?;

    let nav = document.create_element("div")?;
    nav.set_id("cd-nav");
    nav.set_class_name("cd-nav");

    let nav_wrapper = document.create_element("div")?;
    nav_wrapper.set_class_name("cd-navigation-wrapper");

    let nav_half_block_one = document.create_element("div")?;
    nav_half_block_one.set_class_name("cd-half-block");

    let nav_half_block_one_nav = document.create_element("nav")?;

    let nav_half_block_one_nav_ul = document.create_element("ul")?;
    nav_half_block_one_nav_ul.set_class_name("cd-primary-nav");

    create_nav1_link(document, &nav_half_block_one_nav_ul, "index.html", "[html]menu.showcase", "Showcase")?;
    create_nav1_link(document, &nav_half_block_one_nav_ul, "blog.html", "[html]menu.blog", "Blog")?;
    create_nav1_link(document, &nav_half_block_one_nav_ul, "about.html", "[html]menu.about", "About")?;
    create_nav1_link(document, &nav_half_block_one_nav_ul, "contact.html", "[html]menu.contact", "Contact")?;

    let nav_half_block_one_nav_ul_node = web_sys::Node::from(nav_half_block_one_nav_ul);
    nav_half_block_one_nav.append_child(&nav_half_block_one_nav_ul_node)?;

    let nav_half_block_one_nav_node = web_sys::Node::from(nav_half_block_one_nav);
    nav_half_block_one.append_child(&nav_half_block_one_nav_node)?;

    let nav_half_block_one_node = web_sys::Node::from(nav_half_block_one);
    nav_wrapper.append_child(&nav_half_block_one_node)?;

    let nav_half_block_two = document.create_element("div")?;
    nav_half_block_two.set_class_name("cd-half-block");

    let nav_half_block_two_address = document.create_element("address")?;

    let nav_half_block_two_address_ul_one = document.create_element("ul")?;
    nav_half_block_two_address_ul_one.set_class_name("cd-contact-info");

    let nav_half_block_two_address_ul_one_li = document.create_element("li")?;

    let nav_half_block_two_address_ul_one_li_a = document.create_element("a")?;
    nav_half_block_two_address_ul_one_li_a.set_attribute("href", "mailto:cityboundforest@gmail.com")?;
    let nav_half_block_two_address_ul_one_li_a_node = web_sys::Node::from(nav_half_block_two_address_ul_one_li_a);
    nav_half_block_two_address_ul_one_li.append_child(&nav_half_block_two_address_ul_one_li_a_node)?;
    let nav_half_block_two_address_ul_one_li_node = web_sys::Node::from(nav_half_block_two_address_ul_one_li);
    nav_half_block_two_address_ul_one.append_child(&nav_half_block_two_address_ul_one_li_node)?;

    let nav_half_block_two_address_ul_one_node = web_sys::Node::from(nav_half_block_two_address_ul_one);
    nav_half_block_two_address.append_child(&nav_half_block_two_address_ul_one_node)?;

    let nav_half_block_two_address_ul_two = document.create_element("ul")?;
    nav_half_block_two_address_ul_two.set_class_name("cd-contact-socials");

    create_nav2_link(document, &nav_half_block_two_address_ul_two, "https://instagram.com/cityboundforest", false, "Instagram", "[html]socials.instagram")?;
    create_nav2_link(document, &nav_half_block_two_address_ul_two, "https://twitter.com/cityboundforest", false, "Twitter", "[html]socials.twitter")?;
    create_nav2_link(document, &nav_half_block_two_address_ul_two, "https://facebook.com/cityboundforest", false, "Facebook", "[html]socials.facebook")?;
    create_nav2_link(document, &nav_half_block_two_address_ul_two, "https://youtube.com/channel/UCexbz2BYv_lMY1PP_Pdf7_g", false, "YouTube", "[html]socials.youtube")?;
    create_nav2_link(document, &nav_half_block_two_address_ul_two, "https://tiktok.com/@cityboundforest", false, "TikTok", "[html]socials.tiktok")?;
    create_nav2_link(document, &nav_half_block_two_address_ul_two, "https://twitch.tv/cityboundforest", false, "Twitch", "[html]socials.twitch")?;
    create_nav2_link(document, &nav_half_block_two_address_ul_two, "https://mastodon.social/@cityboundforest", true, "Mastodon", "[html]socials.mastodon")?;

    let nav_half_block_two_address_ul_two_node = web_sys::Node::from(nav_half_block_two_address_ul_two);
    nav_half_block_two_address.append_child(&nav_half_block_two_address_ul_two_node)?;

    let nav_half_block_two_address_node = web_sys::Node::from(nav_half_block_two_address);
    nav_half_block_two.append_child(&nav_half_block_two_address_node)?;

    let nav_half_block_two_node = web_sys::Node::from(nav_half_block_two);
    nav_wrapper.append_child(&nav_half_block_two_node)?;

    let nav_wrapper_node = web_sys::Node::from(nav_wrapper);
    nav.append_child(&nav_wrapper_node)?;

    body.append_child(&val)?;
    body.append_child(&nav)?;

    Ok(())
}

fn gen_scripts(document: &web_sys::Document, body: &web_sys::HtmlElement) -> Result<(), JsValue> {
    let jquery = document.create_element("script")?;
    jquery.set_attribute("src", "https://code.jquery.com/jquery-3.6.0.js")?;
    jquery.set_attribute("integrity", "sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=")?;
    jquery.set_attribute("crossorigin", "anonymous")?;
    body.append_child(&jquery)?;

    let fitvids = document.create_element("script")?;
    fitvids.set_attribute("src", "https://raw.githubusercontent.com/davatron5000/FitVids.js/master/jquery.fitvids.js")?;
    body.append_child(&fitvids)?;

    let imagesloaded = document.create_element("script")?;
    imagesloaded.set_attribute("src", "https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js")?;
    body.append_child(&imagesloaded)?;

    for script in ["https://raw.githubusercontent.com/santhoshtr/CLDRPluralRuleParser/8baf9aedc428924fe6ee508b3d952cb5564efb3a/src/CLDRPluralRuleParser.js", "https://raw.githubusercontent.com/wikimedia/jquery.i18n/master/src/jquery.i18n.js", "https://raw.githubusercontent.com/wikimedia/jquery.i18n/master/src/jquery.i18n.messagestore.js", "https://raw.githubusercontent.com/wikimedia/jquery.i18n/master/src/jquery.i18n.fallbacks.js", "https://raw.githubusercontent.com/wikimedia/jquery.i18n/master/src/jquery.i18n.language.js", "https://raw.githubusercontent.com/wikimedia/jquery.i18n/master/src/jquery.i18n.parser.js", "https://raw.githubusercontent.com/wikimedia/jquery.i18n/master/src/jquery.i18n.emitter.js", "https://raw.githubusercontent.com/wikimedia/jquery.i18n/master/src/jquery.i18n.emitter.bidi.js", " https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js", "scripts/lang.js"] {
        let s = document.create_element("script")?;
        s.set_attribute("src", script)?;
        body.append_child(&s)?;
    }

    Ok(())
}

#[wasm_bindgen(start)]
pub fn main() -> Result<(), JsValue> {
    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");
    let body = document.body().expect("document should have a body");

    gen_nav(&document, &body)?;

    let site_container = document.create_element("div")?;
    site_container.set_class_name("site-container");
    body.append_child(&site_container)?;

    gen_scripts(&document, &body)?;

    Ok(())
}