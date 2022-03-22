// import functions and grab DOM elements
import { getGames } from './fetch-utils.js';
import { renderGame } from './render-utils.js';

import { getRetainers } from './fetch-utils.js';
import { renderRetainers } from './render-utils.js';

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const gamesListEl = document.querySelector('.games-list');
const retainersListEl = document.querySelector('.retainers-list');

window.addEventListener('load', async () => {
    fetchAndDisplayGames();
    fetchAndDisplayRetainers();
});


async function fetchAndDisplayGames() {
    const games = await getGames();

    for (let game of games) {
        const gameEl = renderGame(game);
        gamesListEl.append(gameEl);
    }
}

async function fetchAndDisplayRetainers() {
    const retainers = await getRetainers();

    for (let retainer of retainers) {
        const retainerEl = renderRetainers(retainer);
        retainersListEl.append(retainerEl);
    }
}