document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const volumeControl = document.getElementById('volume-control');
    const playlist = document.getElementById('playlist');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const albumArt = document.getElementById('album-art');

    let tracks = Array.from(playlist.querySelectorAll('li'));
    let currentTrackIndex = 0;

    function loadTrack(index
