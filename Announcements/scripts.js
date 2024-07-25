document.addEventListener('DOMContentLoaded', () => {
    const announcementInput = document.getElementById('announcement-input');
    const submitAnnouncementButton = document.getElementById('submit-announcement');
    const scrollingText = document.getElementById('scrolling-text');
    const pauseScrollButton = document.getElementById('pause-scroll');
    const resumeScrollButton = document.getElementById('resume-scroll');

    let announcements = [];
    let scrollAnimation = '';

    function renderAnnouncements() {
        scrollingText.textContent = announcements.join(' | ');
        scrollingText.style.animation = 'scroll 10s linear infinite';
    }

    function addAnnouncement() {
        const announcement = announcementInput.value.trim();
        if (announcement) {
            announcements.push(announcement);
            announcementInput.value = '';
            renderAnnouncements();
        }
    }

    function pauseScroll() {
        scrollingText.style.animationPlayState = 'paused';
    }

    function resumeScroll() {
        scrollingText.style.animationPlayState = 'running';
    }

    submitAnnouncementButton.addEventListener('click', addAnnouncement);
    pauseScrollButton.addEventListener('click', pauseScroll);
    resumeScrollButton.addEventListener('click', resumeScroll);
});
