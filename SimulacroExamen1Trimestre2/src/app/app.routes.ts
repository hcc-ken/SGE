import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'agentes',
    pathMatch: 'full',
  },
  {
    path: 'agentes',
    loadComponent: () => import('./pages/agentes/agentes.page').then((m) => m.AgentesPage),
  },
];
