
//button to refresh page and display new random choice
/*const refreshPage = () => {
  location.reload();
}
*/

const delayedText = document.getElementById("what-game");

const myMessage = () => {
  delayedText.innerHTML = "<span style='font-size: 50px'>What game?</span>";
  console.log("message appears after delay");

}
setTimeout(myMessage, 750);

const app = new function() {
  this.item = document.getElementById('games');
  //pre-populate with a few family favorites
  this.games = ['Uno', 'Skip-Bo', "Codenames"];
 
  //read
  this.fetchAllTheGames = function() {
    let gamesSoFar = '';

    if (this.games.length > 0) {
      for (i=0; i<this.games.length; i++) {
        gamesSoFar += '<tr> <td>' + this.games[i] + '</td>';
     //   gamesSoFar += '<td><button onclick="app.edit('+ i +')" class="btn btn-warning">Edit</button></td>'; 
     //   gamesSoFar += '<td><button onclick="app.delete('+ i +')" class="btn-sm btn-danger">Delete</button></td>'; 
        gamesSoFar += '<td><button type="button" class="btn" onclick="app.delete('+ i +')"><i class="bi bi-trash" style="color: black"></i></button></td>'; 

        gamesSoFar += '</tr>'
      }
    }
    this.total(this.games.length);
    




    return this.item.innerHTML = gamesSoFar;
  };
  
  //create
  this.add = function() {
    item = document.getElementById('add-game');
    const newGame = item.value;
    //checks for accidental click with no text
    if (newGame) {
      //checks for duplicate entry
      if (this.games.indexOf(newGame) === -1) {
      this.games.push(newGame);
      item.placeholder = "Add a game here";
      } else {
        //this is just for me; might later display error message for the user
        console.log("that's already included");
        item.placeholder = "No, a DIFFERENT game!";

      }
      //to clear the box
      item.value='';
      this.fetchAllTheGames();

    }

  };

  //edit
  /*
  this.edit = function(singleGame) {
    item = document.getElementById('edit-game');
    this.item.value = this.games[singleGame];
    document.getElementById('edit-box').style.display = 'block';

    document.getElementById('save-edit').onsubmit = function() {
      let game = item.value;
      if (game) {
        app.games.splice(singleGame, 1, game);
        app.fetchAllTheGames();
        closeInput();
      }
    }
  };
  */  
  
  //delete
  this.delete = function(singleGame) {
    this.games.splice(singleGame, 1)
    this.fetchAllTheGames();
  };

  //count total
  this.total = function(arrayLength) {
    let count = document.getElementById('number-of-games');
    let phrase = `Choosing from ${arrayLength} games`;
    if (arrayLength >= 2) {
      document.getElementById('result').style.visibility = "visible"; 

      count.innerHTML = phrase;
      
    } else if (arrayLength === 1) {  
      document.getElementById('result').style.visibility = "hidden"; 

      count.innerHTML = 'Add at least 1 more game, please';
    } else {
      document.getElementById('result').style.visibility = "hidden"; 
      document.getElementById('feelFree').style.visibility = "hidden"; 

      count.innerHTML = 'Add at least 2 games, please';
    }

 }


    
}

app.fetchAllTheGames();





//pick a game from array

const chooseGame = () => {
  let randomNumber = Math.floor(Math.random() * app.games.length);

  //need to remove this logic and move it so the button doesn't display
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

  //if user clicks Pick Again in the modal
  document.getElementById('pickAgain').addEventListener('click', function(event) {
    console.log('It worked in the modal!');
    event.preventDefault();
    //let fakey = "hello";
    //fakey = document.getElementById('chosenGame');
    //fakey.innerHTML = app.games;
    chooseGame();
    //console.log(chooseGame());
  });

/*
//to close the edit box
function closeInput() {
  document.getElementById('edit-box').style.display='none';
}
*/