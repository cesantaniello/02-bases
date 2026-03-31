import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  templateUrl: './dragonball-page.component.html',
})

export class DragonballPageComponent {
  name = signal('Trunks');
  power = signal(8000);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Piccolo', power: 6000 },
  ]
  );
/*
  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
    });
}
*/

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

