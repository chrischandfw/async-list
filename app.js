// import functions and grab DOM elements
import { getGames } from './fetch-utils.js';
import { renderGame } from './render-utils.js';

import { getRetainers } from './fetch-utils.js';
import { renderRetainers } from './render-utils.js';

import { getCountries } from './fetch-utils.js';
import { renderCountries } from './render-utils.js';

import { getAncientKingdoms } from './fetch-utils.js';
import { renderAncientKingdoms } from './render-utils.js';

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const gamesListEl = document.querySelector('.games-list');
const retainersListEl = document.querySelector('.retainers-list');
const countriesListEl = document.querySelector('.countries-list');
const kingdomsListEl = document.querySelector('.kingdoms-list');

window.addEventListener('load', async () => {
    fetchAndDisplayGames();
    fetchAndDisplayRetainers();
    fetchAndDisplayCountries();
    fetchAndDisplayKingdoms();
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

async function fetchAndDisplayCountries() {
    const countries = await getCountries();

    for (let country of countries) {
        const countryEl = renderCountries(country);
        countriesListEl.append(countryEl);
    }
}

async function fetchAndDisplayKingdoms() {
    const kingdoms = await getAncientKingdoms();

    for (let kingdom of kingdoms) {
        const kingdomEl = renderAncientKingdoms(kingdom);
        kingdomsListEl.append(kingdomEl);
    }
}