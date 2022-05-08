
//button to refresh page and display new random choice
/*const refreshPage = () => {
  location.reload();
}
*/

const app = new function() {
  this.item = document.getElementById('games');
  //pre-populate with a few family favorites
  this.games = ['Uno', 'Skip-Bo', "Codenames"];
 
  //read
  this.fetchAllTheGames = function() {
    let gamesSoFar = '';

    if (this.games.length > 0) {
      for (i=0; i<this.games.length; i++) {
        gamesSoFar += '<tr> <td>' + this.games[i]+ '</td';
        gamesSoFar += '<td><button onclick="app.edit('+i+')" class="btn btn-warning">Edit</button></td>'; 
        gamesSoFar += '<td><button onclick="app.delete('+i+')" class="btn btn-danger">Delete</button></td>'; 
        gamesSoFar += '</tr>';
      }
    }
    this.total(this.games.length);
    return this.item.innerHTML = gamesSoFar;
  };
  
  //create
  this.add = function() {
    item = document.getElementById('add-game');
    const newGame = item.value;
    if (newGame) {
      this.games.push(newGame);
      //to clear the box
      item.value='';
      this.fetchAllTheGames();

    }

  };

  //edit
  this.edit = function(singleGame) {
    item = document.getElementById('edit-game');
    this.item.value = this.games[singleGame];
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      let game = item.value;
      if (game) {
        self.games.splice(singleGame, 1, game);
        self.fetchAllTheGames();
        closeInput();
      }
    }
  };

  //delete
  this.delete = function(singleGame) {
    this.games.splice(singleGame, 1)
    this.fetchAllTheGames();
  };

  //count total
  this.total = function(arrayLength) {
    let result = document.getElementById('number-of-games');
    let phrase = `Choosing among ${arrayLength} games`;
    if (arrayLength >= 2) {
      result.innerHTML = phrase;
      
    } else {  
      result.innerHTML = 'Not enough for a random choice' }
 }


    
}

app.fetchAllTheGames();


//pick a game from array

const chooseGame = () => {
  let randomNumber = Math.floor(Math.random() * app.games.length);
  if (app.games.length > 0) {
    //app.games[randomNumber].innerHTML = chosenGame;
    let result = document.getElementById('chosenGame');
    result.innerHTML = app.games[randomNumber];

  }

}

document.getElementById('pickOne').addEventListener('click', function(event) {
  console.log('It worked!');
  event.preventDefault();
  //let fakey = "hello";
  //fakey = document.getElementById('chosenGame');
  //fakey.innerHTML = app.games;
  chooseGame();
  //console.log(chooseGame());
});


//to close the edit box
function closeInput() {
  document.getElementById('edit-box').style.display='none';
}