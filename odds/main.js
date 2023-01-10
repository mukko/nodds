'use strict';

// TODO 読み込み時は上書きされるが、購入形式のタブを切り替えると全く隠さなくなる
const hide_odds_odds = () => {
  const oddsD = document.querySelectorAll('td.Odds');

  for (let i = 0; i < oddsD.length; i++) {
    oddsD[i].innerHTML = '☆☆☆';
    oddsD[i].style.color = '#000000';
  }
}

chrome.storage.local.get(["odds"], function(value) {
  if (value.odds) {
    window.addEventListener('load', () => hide_odds_odds());
    window.addEventListener('update', () => hide_odds_odds());
  }
})