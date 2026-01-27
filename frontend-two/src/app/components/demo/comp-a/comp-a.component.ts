import { Component, Optional, Self } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css',
  providers: [CounterService],
})
export class CompAComponent {
  constructor(@Self() public service: CounterService) {}
}
