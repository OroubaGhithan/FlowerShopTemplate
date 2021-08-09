let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
let loginForm = document.querySelector(".login-form");
let formClose = document.querySelector("#form-close");
let formBtn = document.querySelector('#login');

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
}


// navbar toggle
menu.addEventListener("click" , () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
    loginForm.classList.remove("active");
})

//formLogin
// formBtn.addEventListener("click" , () =>{
//     loginForm.classList.toggle("active");
// })
// formClose.addEventListener("click" , () =>{
//     loginForm.classList.remove("active");
// })

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

// header color 
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})
