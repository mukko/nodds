'use strict';

const hide_race = async () => {
  hide_race_card(); 
  hide_popular();

  // css 上書き。現在タグ埋め込みはできていそうだが、実際のスタイルは上書きできていない
  // ファイル読み込みをあきらめて、タグに直接スタイル指定するようにして動いている
  // let path = chrome.runtime.getURL('race/design.css');
  // let css = document.createElement('link');
  // css.href = path;
  // css.rel = 'stylesheet';
  // css.type = 'text/css';
  // console.log(path);
  // document.head.appendChild(css);
}

const hide_race_card = () => {
  const odds = document.querySelectorAll('.HorseList > td.Txt_R.Popular > span');

  for (let i = 0; i < odds.length; i++) {
    odds[i].innerHTML = '☆☆☆';
    odds[i].style.color = '#000000';
  }
}

const hide_popular = () => {
  const popular = document.querySelectorAll('.HorseList > td.Popular.Popular_Ninki > span');
  for (let i = 0; i < popular.length; i++) {
    popular[i].innerHTML = '☆';
  }

  const popular_back = document.querySelectorAll('.HorseList > td.Popular.Popular_Ninki');
  for (let i = 0; i < popular_back.length; i++) {
    popular_back[i].style.background = '#EAEAEA';
  }
  
}

chrome.storage.local.get(["race"], function (value) {
  if (value.race) {
    window.addEventListener('load', async () => hide_race(), false);
  }
});