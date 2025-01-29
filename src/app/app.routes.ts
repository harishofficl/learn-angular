import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./navbar/navbar.component').then((m) => m.NavbarComponent),
    children: [
      {
        path: 'first',
        loadComponent: () =>
          import('./first/first.component').then((m) => m.FirstComponent),
      },
      {
        path: 'second',
        loadComponent: () =>
          import('./second/second.component').then((m) => m.SecondComponent),
      },
    ],
  },
];
