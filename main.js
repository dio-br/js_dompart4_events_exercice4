// Methode 1
// Je récupère ma div id box
let maDiv = document.getElementById('box');

// J'applique un style css de base sur ma box
maDiv.style.border = "solid 1px black";
maDiv.style.height = "100px";
maDiv.style.width = "100px";
maDiv.style.transition = "all 2s ease";

// Je crée une itération
let cpt = 0;

// event sur ma div. 
// A chaque clique j'incrémente de 1 mon cpt pour verifier le nombre clique dans le if
maDiv.addEventListener('click', () => {
    cpt++
    if (cpt == 1) {
        maDiv.style.borderRadius = "50%";
    } else if (cpt == 2) {
        maDiv.style.backgroundColor = "red";
    } else {
        maDiv.style.borderRadius = "";
        maDiv.style.backgroundColor = "";
        cpt = 0
    }
})




