
function playSong(songName) {
    alert(`Playing: ${songName}`);
}

document.getElementById('menu-button').addEventListener('click', () => {
    alert('Menu button clicked!');
});

// Variáveis para controlar o player de música
const audioPlayer = document.getElementById('audio-player');
const playButton = document.querySelector('.play-button');
const playIcon = document.getElementById('play-icon');
