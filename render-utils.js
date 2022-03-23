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

    for (let gamingPlatform of game.platforms) {
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

export function renderRetainers(retainer) {
    const retainerEl = document.createElement('div');
    const leftEl = document.createElement('div');
    const rightEl = document.createElement('div');
    const imageEl = document.createElement('img');
    const nameEl = document.createElement('p');
    const specialtyEl = document.createElement('ul');
    const strengthEl = document.createElement('p');
    const attackEl = document.createElement('p');

    retainerEl.classList.add('retainer-info');

    imageEl.src = retainer.image;
    nameEl.textContent = retainer.name;
	
    for (let specialties of retainer.specialty) {
        const li = document.createElement('li');

        li.textContent = specialties;
        specialtyEl.appendChild(li);
    }

    strengthEl.textContent = `Strength: ${retainer.Strength}`;
    attackEl.textContent = `Attack: ${retainer.Attack}`;

    leftEl.append(imageEl);
    rightEl.append(nameEl, specialtyEl, strengthEl, attackEl);

    retainerEl.append(leftEl, rightEl);

    return retainerEl;
}