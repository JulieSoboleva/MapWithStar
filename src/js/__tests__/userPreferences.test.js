import Settings from "../userPreferences";

const defaultMap = new Map();
defaultMap.set('theme', 'dark');
defaultMap.set('music', 'trance');
defaultMap.set('difficulty', 'easy');

test('creating an instance of a class with all parameters', () => {
  const settings = new Settings({ theme: 'light', music: 'chillout', difficulty: 'hard' });
  const userMap = new Map();
  userMap.set('theme', 'light');
  userMap.set('music', 'chillout');
  userMap.set('difficulty', 'hard');
  expect(settings.preferences).toEqual(defaultMap);
  expect(settings.userPreferences).toEqual(userMap);
});

test('creating an instance of a class with two parameters', () => {
  const settings = new Settings({ theme: 'gray', difficulty: 'nightmare' });
  const userMap = new Map();
  userMap.set('theme', 'gray');
  userMap.set('difficulty', 'nightmare');
  expect(settings.preferences).toEqual(defaultMap);
  expect(settings.userPreferences).toEqual(userMap);
});

test('creating an instance of a class with one parameters', () => {
  const settings = new Settings({ music: 'off' });
  const userMap = new Map();
  userMap.set('music', 'off');
  expect(settings.preferences).toEqual(defaultMap);
  expect(settings.userPreferences).toEqual(userMap);
});

test('creating an instance of a class without parameters', () => {
  const settings = new Settings({});
  const userMap = new Map();
  expect(settings.preferences).toEqual(defaultMap);
  expect(settings.userPreferences).toEqual(userMap);
});

test('check getter settings 1', () => {
  const settings = new Settings({ theme: 'gray', difficulty: 'nightmare' });
  const resultMap = new Map();
  resultMap.set('theme', 'gray');
  resultMap.set('music', 'trance');
  resultMap.set('difficulty', 'nightmare');
  expect(settings.settings()).toEqual(resultMap);
});

test('check getter settings 2', () => {
  const settings = new Settings({});
  expect(settings.settings()).toEqual(defaultMap);
});

test('check getter settings 3', () => {
  const settings = new Settings({ theme: 'light' });
  const resultMap = new Map();
  resultMap.set('theme', 'light');
  resultMap.set('music', 'trance');
  resultMap.set('difficulty', 'easy');
  expect(settings.settings()).toEqual(resultMap);
});

test('check getter settings 4', () => {
  const settings = new Settings({ theme: 'gray', music: 'pop', difficulty: 'normal' });
  const resultMap = new Map();
  resultMap.set('theme', 'gray');
  resultMap.set('music', 'pop');
  resultMap.set('difficulty', 'normal');
  expect(settings.settings()).toEqual(resultMap);
});
