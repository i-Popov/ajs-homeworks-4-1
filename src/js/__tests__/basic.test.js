import life from '../basic';

test('should return life status 1', () => {
  const result = life({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test('should return life status 2', () => {
  const result = life({ name: 'Маг', health: 50 });

  expect(result).toBe('wounded');
});

test('should return life status 3', () => {
  const result = life({ name: 'Маг', health: 30 });

  expect(result).toBe('wounded');
});

test('should return life status 4', () => {
  const result = life({ name: 'Маг', health: 15 });

  expect(result).toBe('critical');
});
