import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
})

export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
  ]);

  addCharacter() {
    if (this.name() && this.power()) {
      const newCharacter: Character = {
        id: Math.max(...this.characters().map(c => c.id)) + 1,
        name: this.name(),
        power: this.power(),
      };
      this.characters.update(chars => [...chars, newCharacter]);
      this.resetFields();
    }
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}

