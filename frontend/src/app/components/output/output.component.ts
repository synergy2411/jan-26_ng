import { CommonModule, NgIf } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
})
export class OutputComponent {
  x = signal(101);
  y = signal(2);

  z = computed(() => this.x() * this.y());

  increaseX() {
    this.x.update((x) => x + 1);
  }
  increaseY() {
    this.y.update((y) => y + 2);
  }

  username = 'Monica Geller';
  toggle = true;

  onToggle() {
    this.toggle = !this.toggle;
  }
}
