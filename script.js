const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');



let apiQuotes = [];

// Show new Quote
function newQuote(){
// To pick a random quote from API
// const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

//Uncomment for local use
const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

// check if author field is blank
if (!quote.author) {
    authorText.textContent = 'Unknown';
} else{
    authorText.textContent = quote.author;
}

//Check quote length to determine styling
if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
}

quoteText.textContent = quote.text;
}

// Get quotes form API
// async function getQuotes(){
//     const apiUrl = 'https://type.fit/api/quotes'
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
     
//     } catch (e) {
//         // Catch Error here
//         console.error('ERROR MESSAGE'+e);
//     }
// }


//Tweet quote
function tweetQuote(){
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank');
}

// Event listener
newQuoteBtn.addEventListener('click', ()=>{newQuote();});
twitterBtn.addEventListener('click', ()=>{tweetQuote();});


// On load
// getQuotes();

// New Quote local on load
newQuote();