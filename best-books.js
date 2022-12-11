document.addEventListener("DOMContentLoaded", () => {  
  
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


  const formEl = document.getElementById('best-books-form');

  formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const yearEl = document.getElementById('year');
    const monthEl = document.getElementById('month');
    const dateEl = document.getElementById('date');
    const displayEl = document.querySelector('#books-container');

    const year = yearEl.value;
    const month = monthEl.value;
    const date = dateEl.value;

    const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json`;
    const url = `${BASE_URL}?api-key=${API_KEY}`;


    fetch(url)
      .then(function (data) {
        return data.json();        
      })
      .then(function (responseJson) {
        displayEl.innerHTML = '';

        var booksArray = responseJson.results.books.slice(0, 5);
        booksArray.reverse().forEach((item) => {
          console.log(`${item.title} - ${item.author} - ${item.description}`);

          document.querySelector('#books-container').innerHTML +=
          `<div class='bookDiv'>` +
          `<div class="bookLeft"><img src="${item.book_image}" alt="img-text" style="width:100px"></img></div>` +
          `<div class="bookRight"><h5>Title: ${item.title}</h5>` +
          `<span>Author: ${item.author}</span><br/>` +
          `<span>Description: ${item.description}</span><br />`  +
          `</div></div>`;

        });
      });
  });
})
