const card = document.getElementById('card');
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('musicBtn');

// Flip card
card.addEventListener('click', () => {
  card.classList.toggle('open');
});

// Play or Pause music
musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play().then(() => {
      musicBtn.textContent = "⏸ Pause Music";
    }).catch(() => {
      alert("Tap again to allow music playback.");
    });
  } else {
    music.pause();
    musicBtn.textContent = "🎶 Play Music";
  }
});""