/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(annee) {
    if ((annee%4===0)&&(annee %100>0)||(annee%400===0)) {
        return true;
    }
}

// Fonction pour vérifier si une date est valide
function isValid(jour, mois, annee) {
    if (
        annee.getFullYear() === parseInt(year, 10) &&
        mois.getMonth() === parseInt(month, 10) - 1 &&
        jour.getDate() === parseInt(day, 10)
    ) {
        return true;
    }
}

// Utilisez 'isValid' pour vérifier si une date est valide avant d'afficher un message dans la console
