'use strict';

const hide_past5_odds = () => {
  const odds = document.querySelectorAll('div.Popular > span');

  for (let i = 0; i < odds.length; i++) {
    odds[i].innerHTML = '☆☆☆';
  }
}

window.addEventListener('load', () => hide_past5_odds());