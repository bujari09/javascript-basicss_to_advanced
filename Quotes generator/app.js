const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const generateButton = document.getElementById("generate-button");
let quotes = [];
fetch("https://dummyjson.com/quotes")
.then((response) => response.json())
.then((data) => {
    quotes = data.quotes;
    showRandomQuote();
})
.catch((error) => {
    console.error("Error fetching quotes:", error);
});
function showRandomQuote() {
    if (quotes.length === 0) return;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomquote = quotes[randomIndex];

    quoteText.textContent = `"${randomquote.quote}"`;
    quoteAuthor.textContent = `- ${randomquote.author}`;
};  
generateButton.addEventListener("click", showRandomQuote);