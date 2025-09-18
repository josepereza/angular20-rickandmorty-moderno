import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/list/list')
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./pages/detail/detail'),
    /* Angular 18+ permite convertir parámetros en inputs automáticamente */
    //data: { resolve: { id: (route: any) => +route.paramMap.get('id') } }
  },
  { path: '**', redirectTo: '' }
];