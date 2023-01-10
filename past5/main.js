'use strict';

const hide_past5_odds = () => {
  const odds = document.querySelectorAll('div.Popular > span');

  // !importantで文字色が上書きされているので、以下の記法でこちらの!importantを指定するように
  for (let i = 0; i < odds.length; i++) {
    odds[i].innerHTML = '☆☆☆';
    odds[i].style.cssText = 'color: #000000 !important;';
  }
}


chrome.storage.local.get(["past5"], function (value) {
  if (value.past5) {
    window.addEventListener('load', () => hide_past5_odds());
  }
});
