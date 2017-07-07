/*---------------------Program Variables-------------------------*/
var quotes = Quotes();
printQuote();
var time = timeout();


/*---------------------Program Functions-------------------------*/
//Quote function that returns an object with all methods needed to get quotes
//This function will return a randomized array by default
function Quotes(){

  let output = {
    quotes: [
      {quote:"I’ve got a bad feeling about this.",
       source:"Han Solo",
        citation:"A New Hope",
        date:"1977",
        img:"http://cdn.mos.cms.futurecdn.net/JSP98spa8obTESrhUQb69P.jpg",
        catagories:['a_new_hope'],
        tags:['Smuggler','Episode 4','CBFF','Rebel Leaders']},
      {quote:"Do. Or do not. There is no try.",
       source:"Yoda",
        citation:"Empire Strikes Back",
        date:"1980",
        img:"http://static.srcdn.com/wp-content/uploads/2017/02/Luke-Skywalker-Yoda-Dagobah.jpg",
        catagories:['empire_strikes_back','jedi'],
        tags:['Jedi','Wisdom','Mentorship']},
      {quote:"In my experience there is no such thing as luck.",
       source:"Obi-Wan Kenobi",
        citation:"A New Hope",
        date:"1977",
        img:"http://static1.businessinsider.com/image/568c11c4c08a80880e8b6ede-1596-798/alec-guinness.jpg",
        catagories:['a_new_hope','jedi'],
        tags:['Jedi','Wisdom','Mentorship']},
      {quote:"It's a trap!",
       source:"Admiral Ackbar",
        citation:"Return of the Jedi",
        date:"1983",
        img:"http://www.telegraph.co.uk/content/dam/TV/March%202016/Admiral-Ackbar-xlarge.jpg",
        catagories:['return_of_the_jedi','rebellion'],
        tags:['Rebellion','Battel of Endor','Rebel Leaders']},
      {quote:"Help me, Obi-Wan Kenobi. You’re my only hope.",
       source:"Leia Organa",
        citation:"A New Hope",
        date:"1977",
        img:'http://www.scifimoviepage.com/wp-content/uploads/2015/10/carrie_fisher_026_by_dave_daring-d679fpu.jpg',
        catagories:['a_new_hope','rebellion'],
        tags:['iconic','Princess Leia','Rebel Leaders']},
      {quote:"You’re letting her keep it?! Would you like to know the probability of her using it against you? It’s high. It’s very high.",
       source:"K-2SO",
        citation:"Rogue One",
        date:"2016",
        img:'http://static.srcdn.com/wp-content/uploads/2016/10/K-2SO-in-Star-Wars-Rogue-One.jpg',
        catagories:['rogue_one','rebellion'],
        tags:['droid']
        }
      ],
      getRandomQuote: ()=>{
        if(output.quotes.length === 0){
          output.quotes = regen(output.quotes);
        }
        return output.quotes.shift();
    }

  }
  //function that regenerates/randomizes the quotes lists
  //remember that calling the quotes() method always randomizes the internal
  //array
  function regen(arr){
    let a = Quotes();
    arr = a.quotes;
    return arr;
  }
  //function that randomizes the quotes list
  function randomize(arr){
      let i = arr.length;
      let j = 0;
      let temp;
      //Loop through array and swap out order of quotes
      while(i--){
        j = Math.floor(Math.random()*(i+1));

        //swap random element with current element
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
        return arr;
  }
  output.quotes = randomize(output.quotes);
  return output;
}



function printQuote(){

  let randQuote = quotes.getRandomQuote();
  console.log(randQuote);
  let img = document.querySelector('.backgroundImg');
  let quoteText = document.querySelector('.quote');
  let nameText = document.querySelector('.name');
  let citationText = document.querySelector('.citation');
  let yearText = document.querySelector('.year');
  img.src = randQuote.img;
  img.addEventListener('load',()=>{
    quoteText.innerHTML = randQuote.quote;
    nameText.innerHTML = randQuote.source;
    citationText.innerHTML = randQuote.citation;
    yearText.innerHTML = randQuote.date;

  });

}

/*----------------PAGE ACTIONS-------------------------------*/
//Quote Slideshow Scroller
function timeout(){
  clearTimeout(time);
  console.log("timeout");
  return setTimeout(()=>{
    printQuote();
    timeout();
  },5000);
}
// "Show Quote" event listener
document.getElementById('loadQuote').addEventListener("click", ()=>{
  printQuote();
  clearTimeout(time);
  time = timeout();
}, false);
