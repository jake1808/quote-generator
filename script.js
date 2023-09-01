const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];

function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}


function hideLoadingSpinner(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// Show new Quote
function newQuote(){
    showLoadingSpinner();
    // To pick a random quote from API
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    //Uncomment for local use
    // const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    // check if author field is blank
    !quote.author?authorText.textContent = 'Unknown':authorText.textContent = quote.author;

    //Check quote length to determine styling
    quote.text.length > 120?quoteText.classList.add('long-quote'):quoteText.classList.remove('long-quote');

    // Set quote, Hide loader
    quoteText.textContent = quote.text;
    hideLoadingSpinner();
}

// Get quotes form API
async function getQuotesFromAPI(){
    showLoadingSpinner();
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
     
    } catch (e) {
        // Catch Error here
        console.error('ERROR MESSAGE'+e);
    }
}


//Tweet quote
function tweetQuote(){
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank');
}

// Event listener
newQuoteBtn.addEventListener('click', ()=>{getQuotesFromAPI();});
twitterBtn.addEventListener('click', ()=>{tweetQuote();});


// On load
getQuotesFromAPI();

// New Quote local on load
// newQuote();