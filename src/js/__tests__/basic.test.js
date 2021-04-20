import GameSavingLoader from '../gameSavingLoader';

test('test',
  async () => {
    const gameSave = await GameSavingLoader.load();
    expect(gameSave).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    });
  });
