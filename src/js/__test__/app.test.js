import Team from '../app';

beforeEach(() => {
  jest.resetAllMocks();
});

class Character {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }
}

test('adding to the team - unit', () => {
  const persons = new Team();
  const person1 = new Character('Anri', 27, 'inventor');
  const result = persons.add(person1);
  const expected = new Set([{ name: 'Anri', age: 27, role: 'inventor' }]);
  expect(result).toEqual(expected);
});

// test('adding without repeating - unit', () => {
//   const persons = new Team();
//   const person1 = new Character('Anri', 27, 'inventor');
//   persons.add(person1);
//   //const result = persons.add(person1);
//   //const expected = Error('Персонаж уже есть в команде!');
//   expect(persons.add(person1)).toBe('Персонаж уже есть в команде!');
// });

test('multiple addition', () => {
  const persons = new Team();
  const person1 = new Character('Anri', 27, 'inventor');
  const person2 = new Character('Charles', 32, 'painter');
  const result = persons.addAll(person1, person2);
  const expected = new Set([
    { name: 'Anri', age: 27, role: 'inventor' },
    { name: 'Charles', age: 32, role: 'painter' },
  ]);
  expect(result).toEqual(expected);
});

test('multiple addition without repeating', () => {
  const persons = new Team();
  const person1 = new Character('Anri', 27, 'inventor');
  const person2 = new Character('Charles', 32, 'painter');
  const result = persons.addAll(person1, person2, person2);
  const expected = new Set([
    { name: 'Anri', age: 27, role: 'inventor' },
    { name: 'Charles', age: 32, role: 'painter' },
  ]);
  expect(result).toEqual(expected);
});

test('returning an array', () => {
  const persons = new Team();
  const person1 = new Character('Anri', 27, 'inventor');
  const person2 = new Character('Charles', 32, 'painter');
  persons.addAll(person1, person2, person2);
  const result = persons.toArray();
  const expected = [
    { name: 'Anri', age: 27, role: 'inventor' },
    { name: 'Charles', age: 32, role: 'painter' },
  ];
  expect(result).toEqual(expected);
});
