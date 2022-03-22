// import functions and grab DOM elements
import { getGames } from './fetch-utils';
import { renderGame } from './render-utils';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const gamesListEl = document.querySelector('.games-list');

window.addEventListener('load', async () => {
    fetchAndDisplayGames();
});


async function fetchAndDisplayGames() {
    const games = await getGames();

    for (let game of games) {
        const gameEl = renderGame(game);
        gamesListEl.append(gameEl);
    }
}