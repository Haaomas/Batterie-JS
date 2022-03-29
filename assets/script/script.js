//TEST de connexion
console.log("Be water my Friend");

//Début du projet 
document.addEventListener("keydown", function (e) {
    //Récupère la key de la touche du clavier, utilisation de key au lieu de keyCode qui est obsolète  
    const keyClick = e.key;
    console.log('keyClick', keyClick);

    //Sélection dynamique des div pour toggle de classe
    const testDiv = document.querySelector(`div[data-key="${keyClick}"]`);
    testDiv.classList.toggle("addClass");

    //Sélection dynamique des fichiers audio
    const audioSelect = document.querySelector(`audio[data-key="${keyClick}"]`);
    //Si pas de fichier audio fin de la fonction 
    if (!audioSelect) return;

    //Création dynamique du fichier audio 
    const audioCreate = new Audio(audioSelect.src);


    // Lecture du fichier 
    audioCreate.currentTime = 0;
    audioCreate.play();

    //Retrait de la classe à la fin de la transition
    document.addEventListener('transitionend', () => {
        console.log('Transition terminée');
        testDiv.classList.remove("addClass");
    });
});
