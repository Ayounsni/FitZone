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
