import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css',
})
export class OutputComponent {
  username = 'Monica Geller';
  toggle = true;

  onToggle() {
    this.toggle = !this.toggle;
  }
}
