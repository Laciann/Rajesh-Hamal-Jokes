function GetJoke(jokes)
    {
      let jokesArray = jokes;
      let randomNo = Math.round(Math.random() * (jokesArray.length-1));
      let randomJoke = jokesArray[randomNo];
      document.getElementById("joke").innerHTML=randomJoke;
    }