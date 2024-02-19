import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(mod => mod.HomeComponent)
    },

    {
        path: 'kendo',
        loadComponent: () => import('./components/kendoui/kendo/kendo.component')
            .then(mod => mod.KendoComponent)
    },

    {
        path: 'prime',
        loadComponent: () => import('./components/primeng/prime/prime.component')
            .then(mod => mod.PrimeComponent)
    },

    {
        path: 'angular17',
        loadComponent: () => import('./components/newfeatures/presentation/presentation.component')
            .then(mod => mod.PresentationComponent)
    }
];
