import { Component, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.component.html',
})

export class CharacterAddComponent {
  name = signal('');
  power = signal(0);
  characters: any;

  addCharacter() {
    if (this.name() && this.power()) {
      const newCharacter: Character = {
        id: Math.max(...this.characters().map((c: { id: number; }) => c.id)) + 1,
        name: this.name(),
        power: this.power(),
      };
      this.characters.update((chars: Character[]) => [...chars, newCharacter]);
      this.resetFields();
    }
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
