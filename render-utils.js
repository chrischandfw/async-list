export function renderGame(game) {
    const gameEl = document.createElement('div');
    const titleEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const ratingEl = document.createElement('p');
    const platformEl = document.createElement('ol');
	
    gameEl.classList.add('game');

    titleEl.textContent = game.title;
    yearEl.textContent = game.year_released;
    ratingEl.textContent = game.rating;
    platformEl.textContent = game.platform;

    for (let gamingPlatform of game.platform) {
        const li = document.createElement('li');

        li.textContent = gamingPlatform;
        platformEl.appendChild(li);
    }

    gameEl.append(
        titleEl,
        yearEl,
        ratingEl,
        platformEl
    ); 

    return gameEl;
}
