/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/	
const quotes = [ // Create an array of objects to hold the data for your quotes. Name the array ​quotes.​
{
	quote: "The stock market is filled with individuals who know the price of everything, but the value of nothing",
	source: "Phillip Fisher",
	cite: "Wall Street Journal",
	yr: 1988,
},
{
	quote: "You get recession, you get stock market declines. If you don’t understand that’s going to happen, then you are not ready and you will not do well in the markets.",
	source: "Peter Lynch",
	cite: "Huff Po",
	yr: 2001,
},
{
	quote: "An investment in knowledge pays the best interest.",
	source: "Benjamin Franklin",
	cite: "ABC",
	yr:2004,
},
{
	quote: "I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.",
	source:"Warren Buffett",
	cite:"NBC",
	yr:1992,
},
{
	quote: "A thousand point gain or a thousand point decline does not alter the fact that we are saving for retirement or building up funds for education", 
	source: "Don B Connelly",
	cite: "CBS",
	yr: 1982,
},
{
	quote: "People’s everyday routines will keep the stock market going.",
	source: "Don C Connelly",
	cite: "New York Times",
	yr: 1984,
}
];



/***
 * `getRandomQuote` function
***/
 var quoteNumber = 0;
 function getRandomQuote()  { // Create a function named g​etRandomQuote​ and inside that function:
 	quoteNumber = Math.floor( Math.random() * quotes.length ) ; // generate a random number between 0 and the last index in the ​array​ parameter
 	var quoteRandom = quotes[quoteNumber].quote; //Uses it to select a quote object from the quotes array with box notation.
 	return quoteRandom; // return the random item
 	//console.log(quoteRandom);
 }
 //console.log(quoteNumber);




// /***
//  * `printQuote` function
// ***/
var html = ""; //Create a variable to store the HTML string that contains the quote and source properties using the example HTML in the instructions.
function printQuote()  {
var newQuote = getRandomQuote(); //create a variable that calls the getRandomQuote()​ function
html = '<p class="quote">' + quotes[quoteNumber].quote + '</p>';
html += '<p class="source">' + quotes[quoteNumber].source + '<span class="citation">' + quotes[quoteNumber].cite + '</span><span class="year">' + quotes[quoteNumber].yr + '</span></p>';
document.getElementById("quote-box").innerHTML = html; //Set innerHTML property of the '​ quote-box'​ div to equal the HTML string.
}






// /***
//  * click event listener for the print quote button
//  * DO NOT CHANGE THE CODE BELOW!!
// ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);