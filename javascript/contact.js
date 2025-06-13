

//Formulaire-----------------------------------------------------------------------------------------------------------------------------
//Regex
const emailRegex = /^[^@\s]+@[^@\s]+.[^@\s]+$/;
const phoneRegex = /^[0-9\s-/]{10,14}$/;

//Formulaire affichage erreur :
function showError(fieldId, message) {
    let span = document.getElementById(fieldId + "Error");
    if (span) {
    span.textContent = message;
    formError = true;
    }
}
function initError(fieldId) {
    document.getElementById(fieldId + "Error").innerHTML = "";
    }



//Vérification des champs
form.addEventListener('submit', function(e) {
    e.preventDefault();
    //Initialisation
    formError = false;
    //summary.innerHTML = "";

    //récupération et contrôles des infos du formulaire
    //

    //email
    let email = document.getElementById("email").value.trim();
    initError("email");
    if(!emailRegex.test(email) || email.length > 50){
        showError("email", "Format d'adresse email invalide");
    }

    //tel
    let phone = document.getElementById("phone").value.trim();
    //Vérification des données renseignées
    initError("phone");
    if(!phoneRegex.test(phone)){
        showError("phone","Format de numéro de téléphone invalide");
    }
    
    // Nom
    let fullname = document.getElementById("fullname").value.trim();
    initError("fullname");
    if(fullname.length < 2 || fullname.length > 50){
        showError("fullname","Prénom invalide (doit avoir entre 2 et 50 caractères)");
    }

    // Société
    let society = document.getElementById("society").value.trim();
    initError("society");
    if(society.length > 50){
        showError("society","Société invalide (doit comporter moins de 50 caractères)");
    }
    let messageDetail = document.getElementById("messageDetail").value.trim();

    //On alimente le champ message
    let message = document.getElementById("message-hidden");
    message.value = messageDetail +  "\n" +  "\n" + fullname + "\n" + society + "\n" +  phone + "\n" + email;
    // si pas d’erreur, soumettre manuellement
    console.log("erreur : " + formError);
    if (!formError) {
        form.submit();
    }
})

