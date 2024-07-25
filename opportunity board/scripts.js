document.addEventListener('DOMContentLoaded', () => {
    const titleInput = document.getElementById('opportunity-title');
    const descriptionInput = document.getElementById('opportunity-description');
    const teamSelect = document.getElementById('opportunity-team');
    const submitButton = document.getElementById('submit-opportunity');
    const opportunitiesContainer = document.getElementById('opportunities');
    const searchInput = document.getElementById('search-opportunity');

    let opportunities = [];

    function renderOpportunities() {
        opportunitiesContainer.innerHTML = '';
        opportunities.forEach((opportunity, index) => {
            const div = document.createElement('div');
            div.className = 'opportunity-item';
            div.innerHTML = `
                <div>
                    <h3>${opportunity.title}</h3>
                    <p>${op
