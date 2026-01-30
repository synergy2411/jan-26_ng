import { Routes } from '@angular/router';
import { OutputComponent } from './components/output/output.component';

export const routes: Routes = [
  {
    path: 'output',
    loadComponent: () =>
      import('./components/output/output.component').then(
        (m) => m.OutputComponent,
      ),
  },
];
