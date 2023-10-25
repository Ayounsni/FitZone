const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
const links = document.querySelectorAll(".list li" );
const login = document.querySelectorAll(".login" );


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

document.getElementById('sign').addEventListener('submit', function (e) {
    e.preventDefault();

    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var cin = document.getElementById('cin').value;
    var tel = document.getElementById('numero').value;
    var email = document.getElementById('adresse').value;

    var nomRegex = /^[A-Za-z\s']{3,}$/;
        var prenomRegex = /^[A-Za-z\s']{3,}$/;
        var cinRegex = /^[a-zA-Z]{2}\d{5,6}$/;
        var emailRegex = /^\S+@\S+\.\S+$/;
        var telRegex = /^\+212\d{9}$/;

    const errors = {};

    function displayError(id, message) {
        errors[id] = message;
        const errorElement = document.getElementById(id + "Error");
        errorElement.textContent = message;
        errorElement.style.color = "red";

    }

    function clearError(id) {
        delete errors[id];
        const errorElement = document.getElementById(id + "Error");
        errorElement.textContent = "";
    }
if (!nom.match(nomRegex)) {
        displayError("nom", "Veuillez entrer un nom valide (au moins 3 caractères).");
    } else {
        clearError("nom");
    }
    if (!prenom.match(prenomRegex)) {
        displayError("prenom", "Veuillez entrer un prénom valide (au moins 3 caractères).");
    } else {
        clearError("prenom");
    }
    if (!cin.match(cinRegex)) {
        displayError("cin", "Veuillez entrer un numéro de CIN valide (2 lettres suivies de 5 ou 6 chiffres).");
    } else {
        clearError("cin");
    }
    if (!email.match(emailRegex)) {
        displayError("email", "Veuillez entrer une adresse e-mail valide.");
    } else {
        clearError("email");
    }
    if (!tel.match(telRegex)) {
        displayError("phone", "Veuillez entrer un numéro de téléphone valide (commence par +212 suivi de 9 chiffres).");
    } else {
        clearError("phone");
    }
  
});




