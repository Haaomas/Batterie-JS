console.log("Be water my Friend");

//TEST de connexion
console.log("Be water my Friend");

//Début du projet 
document.addEventListener("keydown", function (e) {
    //Récupère la key de la touche du clavier  
    let keyClick = e.keyCode; //TODO Trouver une version mise à jour 

    //Sélection dynamique des div pour toggle de classe
    let testDiv = document.querySelector(`div[data-key="${keyClick}"]`); //TODO Modifier le Toggle 
    testDiv.classList.toggle("addClass");

    //Sélection dynamique des fichiers audio
    let audioSelect = document.querySelector(`audio[data-key="${keyClick}"]`);

    //Création dynamique du fichier audio 
    let audioCreate = new Audio(audioSelect.src);

    // Lecture du fichier 
    audioCreate.currentTime = 0;
    audioCreate.play();
});