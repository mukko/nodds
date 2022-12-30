'use strict';

const hide_odds_odds = () => {
  const odds = document.querySelectorAll('div.Popular > span');

  for (let i = 0; i < odds.length; i++) {
    odds[i].innerHTML = '☆☆☆';
  }
}

window.addEventListener('load', () => hide_odds_odds());