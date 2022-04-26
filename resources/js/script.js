//array of game names
const favoriteGames = ['Uno', "Skip-Bo", "Pictionary", "Apples to Apples", "Codenames"];
//choose random number
const randomNumber = Math.floor(Math.random() * favoriteGames.length);
//pick a game from array
const chooseGame = () => {
    return favoriteGames[randomNumber];
}
//display result on page
document.getElementById("chosenGame").innerHTML = chooseGame();






