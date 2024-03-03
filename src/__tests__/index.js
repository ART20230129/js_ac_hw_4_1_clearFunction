import heroHealth from '../index';

test('status - healthy', () => {
  const list = { name: 'Маг', health: 90 };
  const result = heroHealth(list);
  expect(result).toBe('healthy');
});

test('status - wounded', () => {
  const list = { name: 'Лучник', health: 30 };
  const result = heroHealth(list);
  expect(result).toBe('wounded');
});

test('status - critical', () => {
  const list = { name: 'Всадник', health: 10 };
  const result = heroHealth(list);
  expect(result).toBe('critical');
});

// Второй вариант тестирования
test.each([
  ['Маг', 90, 'healthy'],
  ['Лучник', 30, 'wounded'],
  ['Всадник', 10, 'critical'],
])('testing status health %s with %i - %s', (nic, quantity, status) => {
  const result = heroHealth({ name: nic, health: quantity });
  expect(result).toBe(status);
})
