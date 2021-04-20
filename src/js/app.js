import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    return saving;
  } catch (err) {
    return false;
  }
  // Your code here with await
})();
