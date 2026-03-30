import { Component, computed, signal } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css'],
  standalone: true,
  imports: [CommonModule, UpperCasePipe]
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
      const description = `${this.name()} - ${this.age()}`;
      return description;
    }
  );

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(): void {
    this.age.set(60);
  }
}
