let answer;
var container = document.getElementsByClassName("alt");
//prompt
function contenu() {
  answer = prompt("entrez votre nom !");
  container.innerHTML = "Bravo " + answer;
}
window.onload = contenu;
