document.addEventListener ('DOMContentLoaded', () =>{
    const aboutLink = document.getElementById('about-us')
    const aboutSection = document.getElementById('about-section');

    const contactLink = document.getElementById('contact-link')
    const footerContact = document.getElementById('footer-contact')

    if(aboutLink && aboutSection){
        aboutLink.addEventListener('click', function(event){
            event.preventDefault();
            contactLink.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });

        });
    }

    if(contactLink && footerContact){
        contactLink.addEventListener('click', function(event){
            event.preventDefault();
            footerContact.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });
        });

    }

});

