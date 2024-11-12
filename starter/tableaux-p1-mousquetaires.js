/*
TABLEAUX - PRÉPA 1 : Les trois mousquetaires
1. Créez un tableau nommé 'mousquetaires' contenant les noms des trois mousquetaires, Athos, Porthos et Aramis.
2. Utilisez une boucle 'for' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Voici les Trois Mousquetaires :".
3. Ajoutez au tableau le mousquetaire d'Artagnan.
4. Utilisez la méthode 'forEach()' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Ils sont quatre à présent :".
5. Supprimez Aramis du tableau.
6. Utilisez une boucle 'for-of' pour parcourir le tableau et affichez le nom de chaque mousquetaire.
   Précédez le texte "Le pauvre Aramis est mort…".
*/

let mousquetaire = ["Athos", "Porthos", "Aramis"];
console.log("Voici les trois mousquetaires :")
for (let i = 0; i < mousquetaire.length; i++) {
    console.log(mousquetaire[i])
}

mousquetaire.push("Artagnan");
console.log("Ils sont quatre à présent :")
mousquetaire.forEach((mousquetaire) => {
    console.log(mousquetaire);
})

mousquetaire.shift("Aramis")
console.log("Le pauvre Aramis est mort…")
mousquetaire.forEach((mousquetaire) => {
    console.log(mousquetaire);
})