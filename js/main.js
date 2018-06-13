var mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];
var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];


console.log(mois[2]);
console.log(mois[4]);
console.log(mois[10]);

mois[7] = "août";
console.log(mois[7]);

console.log(mois);

array.push("Courgette");

array[4].push("Citron");
array.splice(1, 1);
array.splice(1, 0, "Poire");



console.log(array);
