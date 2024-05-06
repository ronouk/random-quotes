"use strict";

// variable declaration
const contentBody = document.querySelector(".content-body");
const quoteBox = document.querySelector(".quote-box")
const quoteTag = document.getElementById("quote-tag");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const footerDate = document.getElementById("footer-date");

const quoteApi = 'https://api.quotable.io/quotes/random?limit=10';
loaderAnimation("block");
fetch(quoteApi)
.then(res => res.json())
// .then(data => console.log(data));
.then(data => displayQuotes(data));
const displayQuotes = quotes =>{

    for (let i = 0; i < quotes.length; i++) {
        const singleQuote = quotes[i].author;
        const quoteBody = document.createElement('figure');
        quoteBody.className = "quote-box";
        quoteBody.innerHTML = `
            <p id="quote-tag">${quotes[i].tags[0]}</p>
            <blockquote id="quote" cite="https://goquotes.docs.apiary.io/">${quotes[i].content}</blockquote>
            <figcaption id="author">- ${quotes[i].author}</figcaption>
        `;

        contentBody.appendChild(quoteBody);

    }
    loaderAnimation("none")
};

// Loader animation
function loaderAnimation(status){
    const loaderSpinner = document.getElementById("lds-hourglass");
    loaderSpinner.style.display=status;
}

// Footer date
let newDate = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
footerDate.innerText = newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear();



