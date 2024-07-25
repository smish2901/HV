document.addEventListener('DOMContentLoaded', () => {
    const stepsLeaderboard = document.getElementById('steps-leaderboard');
    const pagesLeaderboard = document.getElementById('pages-leaderboard');
    const pomodoroLeaderboard = document.getElementById('pomodoro-leaderboard');
    const categorySelect = document.getElementById('category-select');

    let data = {
        steps: [
            { name: 'Alice', value: 12000 },
            { name: 'Bob', value: 11500 },
            { name: 'Charlie', value: 11000 }
        ],
        pages: [
            { name: 'David', value: 45 },
            { name: 'Eva', value: 42 },
            { name: 'Frank', value: 40 }
        ],
        pomodoro: [
            { name: 'Grace', value: 25 },
            { name: 'Hannah', value: 22 },
            { name: 'Ian', value: 20 }
        ]
    };

    function renderLeaderboard(category) {
        const leaderboard = {
            steps: stepsLeaderboard,
            pages: pagesLeaderboard,
            pomodoro: pomodoroLeaderboard
        };

        for (let key in leaderboard) {
            leaderboard[key].innerHTML = '';
        }

        if (category === 'all' || !category) {
            Object.keys(leaderboard).forEach(cat => {
                data[cat].forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'leaderboard-item';
                    div.innerHTML = `
                        <span>${item.name}</span>
                        <span>${item.value}</span>
                    `;
                    leaderboard[cat].appendChild(div);
                });
            });
        } else {
            data[category].forEach(item => {
                const div = document.createElement('div');
                div.className = 'leaderboard-item';
                div.innerHTML = `
                    <span>${item.name}</span>
                    <span>${item.value}</span>
                `;
                leaderboard[category].appendChild
