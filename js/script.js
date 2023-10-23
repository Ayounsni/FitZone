const links = document.querySelectorAll(".list li" )
const login = document.querySelectorAll(".login" )


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
    answer1.classList.toggle("open")
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
