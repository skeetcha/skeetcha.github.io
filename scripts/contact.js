import getBase from './base.js';
import parseMarkdown from './markdown.js';
import setupNavAnim from './nav_anim.js';
import setupLink from './link_setup.js';

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm() {
    return (document.getElementById('contact-name').value !== '') && (document.getElementById('contact-email').value !== '') && (document.getElementById('contact-message').value !== '') && (document.getElementById('contact-email').value.match(emailRegex));
}

function showValidation(el, name) {
    if (name === 'email') {
        if (el.value === '') {
            alert('Email field is empty.');
        } else if (!el.value.match(emailRegex)) {
            alert('Email field does not contain an email.');
        }
    } else {
        if (el.value === '') {
            alert(name + ' field is empty.');
        }
    }
}

(function () {
    document.body.innerHTML = getBase(true, false, true);

    document.querySelector('.site-content').innerHTML = `
        <div class="input"><input type="text" required placeholder="Name *" name="name" id="contact-name" /></div>
        <div class="input"><input type="email" required placeholder="Email *" name="email" id="contact-email" /></div>
        <div class="input"><textarea name="message" id="contact-message" placeholder="Message *"></textarea></div>
        <ul class="cd-pagination custom-icons">
            <li class="button-submit"><a href="#"><i>Submit</i></a></li>
        </ul>
    `;

    document.querySelectorAll('.cd-primary-nav li a').forEach((element, key, parent) => {
        if (element.href.indexOf('contact.html') != -1) {
            element.classList.add('selected');
        } else {
            element.classList.remove('selected');
        }
    });

    document.querySelector('.button-submit a').addEventListener('click', (e) => {
        e.preventDefault();

        if (!validateForm()) {
            showValidation(document.getElementById('contact-name'), 'Name');
            showValidation(document.getElementById('contact-email'), 'email');
            showValidation(document.getElementById('contact-message'), 'Message');
            return false;
        }

        alert('Your message is sending. You will see a notification saying "OK" if your message sent correctly. Press Okay to close this message.');

        var name = document.getElementById('contact-name').value;
        var email = document.getElementById('contact-email').value;
        var message = document.getElementById('contact-message').value;

        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-message').value = '';

        email.send({
            SecureToken: '35f5af2e-8f3d-4aea-99a0-cefbd03bb7f6',
            To: 'cityboundforest@gmail.com',
            From: email,
            Subject: 'Message from Website',
            Body: name + ' just sent you a message!\n\n' + message
        }).then(
            message => alert(message)
        );
    });

    setupNavAnim(document);
    parseMarkdown(document);

    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 150);

    setupLink(document);
})();