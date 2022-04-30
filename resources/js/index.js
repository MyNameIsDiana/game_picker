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
    const game = {
      name: document.getElementById('gameName').value,
    }
    //need to check if input value already exists in array
    this.gamesList.push(game)
  }
}


const currentOurFavoriteGames = new OurFavoriteGames;

document.getElementById('addGameForm').addEventListener('submit', function(event) {
  console.log('It worked!');
  event.preventDefault();
  currentOurFavoriteGames.addGame();
  console.log(currentOurFavoriteGames.gamesList);
});

//choose random number
const randomNumber = Math.floor(Math.random() * currentOurFavoriteGames.gamesList.length);

//pick a game from array
const chooseGame = () => {
    return currentOurFavoriteGames.gamesList[randomNumber];
}
//display result on page
document.getElementById("chosenGame").innerHTML = chooseGame();

//display the full array as a test
const displayTheArray = () => {
  for (let i = 0; i < currentOurFavoriteGames.gamesList.length; i++) {
    //what goes here?
  }
};



//button to refresh page and display new random choice
const refreshPage = () => {
  location.reload();
}


