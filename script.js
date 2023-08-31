let apiQuotes = [];

// Show new Quote
function newQuote(){
// To pick a random quote from API
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

//Uncomment for local use
// const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
console.log(quote);
}

// Get quotes form API
async function getQuotes(){
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



// On load
getQuotes();

// New Quote local on load
// newQuote();