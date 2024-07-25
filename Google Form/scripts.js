document.addEventListener('DOMContentLoaded', () => {
    const refreshButton = document.getElementById('refresh-button');
    const form = document.getElementById('form');

    refreshButton.addEventListener('click', () => {
        refreshForm();
    });

    function refreshForm() {
        const formSrc = form.src;
        form.src = formSrc;
    }
});
