const FORM = document.getElementById("quote-form"); // On récupère l'élément par l'ID Quote Form pour en faire une constante
let quoteCount = 0; // On setup le compteur de citations à 0

FORM.addEventListener("submit", function(event) { // On écoute le questionnaire grâce à la constante, on fait un événement sur le bouton submit
  event.preventDefault(); // Evite que la page se recharge et fausse le code
  quoteCount += 1; // On incrémente le compteur de citations
  document.getElementById("count").innerText = `${quoteCount} citations`; // On récupère le nombre du compteur pour le rendre visible sur la page

  const TEXT = document.getElementById("text").value.trim(); // Création d'une constante pour laquelle on retire les espaces vides
  const AUTHOR = document.getElementById("author").value.trim(); // Même chose

  console.log("Citation :", TEXT); // On teste dans la console
  console.log("Auteur/Autrice :", AUTHOR); // IDEM

    if (TEXT && AUTHOR) {
      addQuote(TEXT, AUTHOR)}; // On appelle la fonction
});

function addQuote(quote, author) { // Fonction d'ajout de citations et d'auteurs
  const QUOTE_TEXT = document.createElement("p"); // On crée une constante pour créer un paragraphe
  QUOTE_TEXT.className = "text";
  QUOTE_TEXT.textContent = quote;

  const QUOTE_AUTHOR = document.createElement("p");
  QUOTE_AUTHOR.className = "author";
  QUOTE_AUTHOR.textContent = author;

  const QUOTE_DIV = document.createElement("div"); // On crée une constante pour créer une div
  QUOTE_DIV.className = "quote";
  QUOTE_DIV.appendChild(QUOTE_TEXT);
  QUOTE_DIV.appendChild(QUOTE_AUTHOR);

  const QUOTE_LIST = document.getElementById("quote-list"); // On crée une constante de liste de citations qui comprend les constantes d'avant
  QUOTE_LIST.appendChild(QUOTE_DIV);
}