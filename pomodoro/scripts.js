document.addEventListener('DOMContentLoaded', function() {
    const timeDisplay = document.getElementById('time');
    const startButton = document.getElementById('start-button');
    const pauseButton = document.getElementById('pause-button');
    const resetButton = document.getElementById('reset-button');
    const workTimeInput = document.getElementById('work-time');
    const breakTimeInput = document.getElementById('break-time');

    let timer;
    let isWorking = true;
    let timeLeft;
    let isPaused = true;

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        if (timer) clearInterval(timer);
        const workMinutes = parseInt(workTimeInput.value, 10);
        const breakMinutes = parseInt(breakTimeInput.value, 10);
        timeLeft = isWorking ? workMinutes * 60 : breakMinutes * 60;
        updateDisplay();
        timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                isWorking = !isWorking;
                alert(isWorking ? 'Work period ended! Time for a break.' : 'Break period ended! Time to get back to work.');
                startTimer(); // Start the next timer period
            } else {
                timeLeft--;
                updateDisplay();
            }
        }, 1000);
        isPaused = false;
    }

    function pauseTimer() {
        if (timer) clearInterval(timer);
        isPaused = true;
    }

    function resetTimer() {
        if (timer) clearInterval(timer);
        timeDisplay.textContent = '25:00';
        isPaused = true;
        isWorking = true;
    }

    startButton.addEventListener('click', () => {
        if (isPaused) startTimer();
    });

    pauseButton.addEventListener('click', () => {
        pauseTimer();
    });

    resetButton.addEventListener('click', () => {
        resetTimer();
    });
});
