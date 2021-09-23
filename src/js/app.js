export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже есть в команде!');
    } else {
      return this.members.add(character);
    }
  }

  addAll(...characters) {
    for (const item of characters) {
      this.members.add(item);
    }
    return this.members;
  }

  toArray() {
    this.members = [...this.members];
    return this.members;
  }
}
