document.addEventListener('DOMContentLoaded', () => {
    const issueTitleInput = document.getElementById('issue-title');
    const issueDescriptionInput = document.getElementById('issue-description');
    const issuePrioritySelect = document.getElementById('issue-priority');
    const submitIssueButton = document.getElementById('submit-issue');
    const submissionMessage = document.getElementById('submission-message');

    submitIssueButton.addEventListener('click', () => {
        const issueTitle = issueTitleInput.value;
        const issueDescription = issueDescriptionInput.value;
        const issuePriority = issuePrioritySelect.value;

        if (issueTitle && issueDescription) {
            // Example: Submit the issue to Google Sheets
            // You need to implement Google Sheets API integration here
            // For demo purposes, we assume the submission is successful

            // Simulate success
            submissionMessage.textContent = 'Issue submitted successfully!';
            submissionMessage.style.color = '#4caf50';
            
            // Clear the form fields
            issueTitleInput.value = '';
            issueDescriptionInput.value = '';
            issuePrioritySelect.value = 'low';
        } else {
            submissionMessage.textContent = 'Please fill out all fields.';
            submissionMessage.style.color = '#f44336';
        }
    });
});
