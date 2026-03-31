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
addCharacter() {
throw new Error('Method not implemented.');
}
  name = signal('Trunks');
  power = signal(8000);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Piccolo', power: 6000 },
    ]
  );

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    }
    });
}
