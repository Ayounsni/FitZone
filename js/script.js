const links = document.querySelectorAll(".list li" );
const login = document.querySelectorAll(".login" );
const question1 = document.getElementById("question1");
const reponse = document.getElementById("reponse");
const reponse2 = document.getElementById("reponse2");
const ask = document.getElementById("ask");
const border = document.getElementById("border");
const answer2 = document.getElementById("answer2");
const border1 = document.getElementById("border1");
const answer3 = document.getElementById("answer3");
const border2 = document.getElementById("border2");
const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");



menu.addEventListener("click", () => {
    navbar.classList.toggle("active2")
})
links.forEach((link) => {
    link.addEventListener("click", () =>{
        navbar.classList.remove("active2")
    })
})
login.forEach((link) => {
    link.addEventListener("click", () =>{
        navbar.classList.remove("active2")
    })
})

window.addEventListener("scroll", () =>{
    navbar.classList.remove("active2")
})

question1.addEventListener("click", () => {
    ask.classList.toggle("open")
    question1.classList.toggle("open")
    border.classList.toggle("open")
})


reponse.addEventListener("click", () => {
    answer2.classList.toggle("open")
    reponse.classList.toggle("open")
    border1.classList.toggle("open")
})
reponse2.addEventListener("click", () => {
    answer3.classList.toggle("open")
    reponse2.classList.toggle("open")
    border2.classList.toggle("open")
})




