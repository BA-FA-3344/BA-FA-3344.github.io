const video = document.querySelector('#project-video');
const playButton = document.querySelector('.play-button');
const videoShell = document.querySelector('.video-shell');

playButton.hidden = false;
playButton.addEventListener('click', () => {
  video.play().catch(() => { playButton.hidden = true; });
});
video.addEventListener('play', () => {
  videoShell.classList.add('started');
  playButton.hidden = true;
});

// Visible scores are the single source for the decorative track bars.
const leaderboard = document.querySelector('.leaderboard-card');
document.querySelectorAll('.system-row').forEach((row, index) => {
  row.querySelectorAll('.metric, .score').forEach(cell => {
    const score = Number.parseFloat(cell.textContent);
    if (Number.isFinite(score)) {
      cell.style.setProperty('--score', score);
      cell.style.setProperty('--delay', `${index * 45}ms`);
    }
  });
});
for (let column = 2; column <= 7; column++) {
  const cells = [...document.querySelectorAll(`.system-row td:nth-child(${column})`)];
  const highest = Math.max(...cells.map(cell => Number.parseFloat(cell.textContent)).filter(Number.isFinite));
  cells.forEach(cell => {
    if (Number.parseFloat(cell.textContent) === highest) cell.classList.add('column-best');
  });
}

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  leaderboard.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      leaderboard.dataset.visible = 'true';
      observer.disconnect();
    }
  }, { threshold: 0.15 });
  observer.observe(leaderboard);
}
