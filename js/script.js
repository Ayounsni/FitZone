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



document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        var nom = document.getElementById('nom').value;
        var prenom = document.getElementById('prenom').value;
        var cin = document.getElementById('cin').value;
        var tel = document.getElementById('numero').value;
        var email = document.getElementById('adresse').value;

        var nomRegex = /^[A-Za-z\s']{3,}$/;
        var prenomRegex = /^[A-Za-z\s']{3,}$/;
        var cinRegex = /^[a-zA-Z]{2}\d{6}$/;
        var telRegex = /^\+212\d{9}$/;
        var emailRegex = /^\S+@\S+\.\S+$/;

        if (!nomRegex.test(nom)) {
            alert("Veuillez entrer un nom valide (au moins 3 caractères).");
            event.preventDefault();
            return;
        }
        if (!prenomRegex.test(prenom)) {
            alert("Veuillez entrer un prénom valide (au moins 3 caractères).");
            event.preventDefault();
            return;
        }

        if (!cinRegex.test(cin)) {
            alert("Veuillez entrer un numéro de CIN valide (2 lettres suivies de 6 chiffres).");
            event.preventDefault();
            return;
        }

        if (!telRegex.test(tel)) {
            alert("Veuillez entrer un numéro de téléphone valide (commence par +212 suivi de 9 chiffres).");
            event.preventDefault();
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Veuillez entrer une adresse e-mail valide.");
            event.preventDefault();
            return;
        }
    });
});




