const quotes = [
    {
        name: 'Nelson Mandela',
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {
        name: 'Walt Disney',
        quote: 'The way to get started is to quit talking and begin doing.'
    },

    {
        name: 'Steve Jobs',
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking"
    },

    {
        name: 'Eleanor Roosevelt',
        quote: 'If life were predictable it would cease to be life, and be without flavor. '
    },
    {
        name: "James Cameron",
        quote: 'If you set your goals ridiculously high and it"s a failure, you will fail above everyone else"s success.'
    },
    {
        name: "John Lennon",
        quote: "Life is what happens when you're busy making other plans."
    },
];


const quoteBtn = document.querySelector('.quote_btn');
const quotes_all = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quote_author');

quoteBtn.addEventListener('click', displayQuote);
function displayQuote() {
    let number = Math.floor(Math.random() * quotes.length);
    quotes_all.innerHTML = quotes[number].quote;
    quoteAuthor.innerHTML = quotes[number].name;
}

