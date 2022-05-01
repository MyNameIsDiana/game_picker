//array of game names
//const favoriteGames = ['Uno', "Skip-Bo", "Pictionary", "Apples to Apples", "Codenames"];


//choose random number
//const randomNumber = Math.floor(Math.random() * favoriteGames.length);




class OurFavoriteGames {
  constructor() {
    this.gamesList = [];
    //space here to remind me I need to find way to add image of game package
  }

  addGame(name) {
    let game = {
      name: document.getElementById('gameName').value,
    }
    //for testing only
    console.log('this is the game:' + game.name);
    //need to check if input value already exists in array
    //need to check if input is undefined, doesn't make sense, etc

    if (this.gamesList.includes(game.name) === false)  {
      this.gamesList.push(game.name)
    } //for testing only
    else {
      console.log('That game ' + game.name + ' is already in the list')
    }
  }
}


const currentOurFavoriteGames = new OurFavoriteGames;

document.getElementById('addGameForm').addEventListener('submit', function(event) {
  console.log('It worked!');
  event.preventDefault();
  currentOurFavoriteGames.addGame();
  console.log(this.gamesList);
});

//choose random number
let randomNumber = Math.floor(Math.random() * currentOurFavoriteGames.gamesList.length);





//pick a game from array
const chooseGame = () => {
  if (currentOurFavoriteGames.gamesList.name) {
    return currentOurFavoriteGames.gamesList[randomNumber].name;
  }
}
//display result on page
document.getElementById("chosenGame").innerHTML = chooseGame();




//button to refresh page and display new random choice
const refreshPage = () => {
  location.reload();
}


