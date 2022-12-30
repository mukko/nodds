'use strict';

const hide_race_card = () => {
  const odds = document.querySelectorAll('.HorseList > td.Txt_R.Popular > span');

  for (let i = 0; i < odds.length; i++) {
    odds[i].innerHTML = '☆☆☆';
  }
}

const hide_popular = () => {
  const popular = document.querySelectorAll('.HorseList > td.Popular.Popular_Ninki > span');
  for (let i = 0; i < popular.length; i++) {
    popular[i].innerHTML = '☆';
  }
}

window.addEventListener('load', () => hide_race_card(), false);
window.addEventListener('load', () => hide_popular(), false);