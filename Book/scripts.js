document.addEventListener('DOMContentLoaded', () => {
    const bookTitleInput = document.getElementById('book-title');
    const bookQuoteInput = document.getElementById('book-quote');
    const updateBookQuoteButton = document.getElementById('update-book-quote');
    const currentTitle = document.getElementById('current-title');
    const currentQuote = document.getElementById('current-quote');

    updateBookQuoteButton.addEventListener('click', () => {
        const bookTitle = bookTitleInput.value;
        const bookQuote = bookQuoteInput.value;

        if (bookTitle && bookQuote) {
            currentTitle.textContent = bookTitle;
            currentQuote.textContent = bookQuote;
        } else {
            alert('Please enter both a book title and a quote.');
        }
    });
});
