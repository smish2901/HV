document.addEventListener('DOMContentLoaded', () => {
    const stepCount = document.getElementById('step-count');
    const calories = document.getElementById('calories');
    const distance = document.getElementById('distance');
    const goal = document.getElementById('goal');
    const motivation = document.getElementById('motivation');

    let steps = 0;
    const dailyGoal = 10000;
    const stepToCalories = 0.04;
    const stepToDistance = 0.0008; // km per step

    function updateUI() {
        stepCount.textContent = steps;
        calories.textContent = (steps * stepToCalories).toFixed(2);
        distance.textContent = (steps * stepToDistance).toFixed(2);
        goal.textContent = dailyGoal;

        // Update progress circle (simple example, replace with actual progress calculation)
        const progress = Math.min(steps / dailyGoal * 100, 100);
        document.getElementById('progress-circle').style.border = `10px solid rgba(255, 202, 212, ${progress / 100})`;
    }

    function simulateStepIncrease() {
        steps += Math.floor(Math.random() * 10) + 1;
        updateUI();
    }

    setInterval(simulateStepIncrease, 1000);

    updateUI();
});
