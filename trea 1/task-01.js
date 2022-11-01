
const categories = document.getElementsByClassName("item");
var category = document.getElementsByTagName(`h2`);
var contenido = category[0].innerHTML;
var contenido1 = category[1].innerHTML;
var contenido2 = category[2].innerHTML;

var element = document.getElementsByTagName(`li`);
var numero = element[1].innerHTML;
var numero1 = element[2].innerHTML;
var numero2 = element[3].innerHTML;
const message =   `Number of categories: ${categories.length}
Category: ${contenido} 
Elements: ${numero.length}
Category: ${contenido1} 
Elements: ${numero1.length} 
Category: ${contenido2} 
Elements: ${numero2.length} `; 


console.log(message);









