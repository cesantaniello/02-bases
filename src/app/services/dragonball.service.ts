import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>(this.loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    console.log(
      `Saving characters to local storage: ${this.characters().length}`,
    );
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  private loadFromLocalStorage(): Character[] {
    const stored = localStorage.getItem('characters');
    return stored
      ? JSON.parse(stored)
      : [
          { id: 1, name: 'Goku', power: 9000 },
          { id: 2, name: 'Vegeta', power: 8500 },
        ];
  }

  addCharacter(character: Character) {
    this.characters.update((chars) => [
      ...chars,
      { ...character, id: Math.max(...chars.map((c) => c.id)) + 1 },
    ]);
  }
}
