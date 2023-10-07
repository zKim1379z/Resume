// toggle icon navbar
// let navbar = document.querySelector('.navbar');

// let toggleIcon = function(icon){
    
//     if (icon.classList.contains('fa-bars')){
//         icon.classList.remove('fa-bars');
//         icon.classList.add('fa-x');
//     }else{
//         icon.classList.remove('fa-x');
//         icon.classList.add('fa-bars');
//     }
//     navbar.classList.toggle('active');
//     console.log(navbar)
// }




// onscroll active function

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    })
}

// sticky navbar
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

// Send Email



// Scroll Reveal
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , .portfolio-box, .portfolio-button, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//TypedJS

const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});