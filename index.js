const keys = document.querySelectorAll('.key');

// keys.forEach(key =>
//   key.addEventListener("keydown", (event) => {
//     console.log(event);
//   })
// );

window.addEventListener('keydown', (event) => {
    const key = document.getElementById(event.key);
    const audio = document.getElementById(`audio${event.key}`);
    key.classList.add('press');
    audio.play();
});

window.addEventListener('keyup', event => {
  const key = document.getElementById(event.key);
  const audio = document.getElementById(`audio${event.key}`);
  key.classList.remove('press');
  audio.pause();
  audio.currentTime = 0;
});
