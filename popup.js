(function() {
  const restoreAll = function() {
    chrome.storage.local.get(["race", "past5", "odds"], function (value) {
      console.log(value.race);
      document.getElementById('race').checked = value.race;
      document.getElementById('past5').checked = value.past5;
      document.getElementById('odds').checked = value.odds;
    });
  };
  const saveAll = function() {
    console.log('saveAll');
    chrome.storage.local.set({'race': document.getElementById('race').checked}, function(){
      console.log('race value is set to ' + document.getElementById('race').checked);
    });
    chrome.storage.local.set({'past5': document.getElementById('past5').checked}, function(){});
    chrome.storage.local.set({'odds': document.getElementById('odds').checked}, function(){});
  };
  const init = function() {
    console.log('init');
    restoreAll();
    document.getElementById('save').addEventListener('click', saveAll)
  };
  init();
})();