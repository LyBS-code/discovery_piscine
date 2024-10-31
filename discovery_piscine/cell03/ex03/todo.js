var classname = document.getElementsByClassName("list");
var n = 0

function addElement() {
    n++
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    newDiv.id = "entree" + n;
    newDiv.classList.add("list")
    // et lui donne un peu de contenu
    var newContent = document.createTextNode(
        window.prompt("Veuillez saisir une nouvelle entree", "")
    );
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);
  
    // ajoute le nouvel élément créé et son contenu dans le DOM
    var currentDiv = document.getElementById("entree"+(n-1));
    document.getElementById("ft_list").insertBefore(newDiv,currentDiv);

    newDiv.addEventListener("click", (entre) => {
        document.getElementById(entre.target.id).remove();
    });
};