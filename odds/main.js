'use strict';

const hide_odds_odds = () => {
  const odds = document.querySelectorAll('tr > td.Odds > div > span');
  console.log(odds);
  for (let i = 0; i < odds.length; i++) {
    odds[i].innerHTML = '☆☆☆';
  }
}

window.addEventListener('load', () => hide_odds_odds(), false);
window.addEventListener('click', () => hide_odds_odds());