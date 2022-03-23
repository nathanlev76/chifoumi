const buttons = document.querySelectorAll("button");
var username = prompt("Quel est ton nom ?");
if (username == "")
    var username = "Utilisateur"
var wins = 0;
var lose = 0;
var draw = 0;

document.querySelector("#score").innerHTML = `<span style='color: black; position: absolute;'>Victoires: ${wins}</br>Défaites: ${lose}</br>Égalité: ${draw}</span>`;

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function() {
    var joueur = buttons[i].textContent;
    var robot = buttons[Math.floor(Math.random() * buttons.length)].textContent;
    var resultat;

    if (joueur === robot)
    {
        resultat = "Égalité";
        draw++
        document.querySelector("#score").innerHTML = `<span style='color: black; position: absolute;'>Victoires: ${wins}</br>Défaites: ${lose}</br>Égalité: ${draw}</span>`;
    }
    else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille"))
        {
            resultat = "Gagné";
            wins++
            document.querySelector("#score").innerHTML = `<span style='color: black; position: absolute;'> Victoires: ${wins}</br>Défaites: ${lose}</br>Égalité: ${draw}</span>`;
        }
        
    else
    {
        resultat = "Perdu";
        lose++
        document.querySelector("#score").innerHTML = `<span style='color: black; position: absolute;'>Victoires: ${wins}</br>Défaites: ${lose}</br>Égalité: ${draw}</span>`;
    }
    document.querySelector("#resultat").innerHTML = `
        </br>${username} : ${joueur}</br>
        Robot : ${robot}</br>
    `;
    if (resultat == 'Gagné')
        document.querySelector("#resultat2").innerHTML = "<span style='color: green;'>Gagné</span>";
    else if (resultat == 'Perdu')
        document.querySelector("#resultat2").innerHTML = "<span style='color: red;'>Perdu</span>";
    else
        document.querySelector("#resultat2").innerHTML = "<span style='color: blue;'>Égalité</span>";    
})
}






