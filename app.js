const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function pageTransitions(){
    //button click active class
    for(let i =0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace(' active-btn', '');
            this.className += ' active-btn';
        })
    }
    // sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //romove selected from the others
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');

            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');

        
        }
    })
    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        document.body.classList.toggle("light-theme");
        element.classList.toggle("light-mode")
    })
}

pageTransitions();

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Get form values
    const name = contactForm.querySelector('input[placeholder="YOUR NAME"]').value;
    const email = contactForm.querySelector('input[placeholder="YOUR EMAIL"]').value;
    const subject = contactForm.querySelector('input[placeholder="ENTER SUBJECT"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Show alert with the message
    alert(`📬 Message Received!\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
  });
});