document.addEventListener ('DOMContentLoaded', () =>{
    const aboutLink = document.getElementById('about-us')
    const contactLink = document.getElementById('about-section');

    if(aboutLink && contactLink){
        aboutLink.addEventListener('click', function(event){
            event.preventDefault();
            contactLink.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });

        });
    }

});