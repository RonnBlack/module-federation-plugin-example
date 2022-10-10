import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
// Add this import:
import { WebComponentWrapper, WebComponentWrapperOptions, startsWith } from '@angular-architects/module-federation-tools';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'flights',
        loadChildren: () => loadRemoteModule({
            type: 'manifest',
            remoteName: 'mfe1',
            exposedModule: './Module'
        })
            .then(m => m.FlightsModule)
    },
    // Add these routes:
    {
        path: 'react',
        component: WebComponentWrapper,
        data: {
            type: 'script',
            remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
            remoteName: 'react',
            exposedModule: './web-components',
            elementName: 'react-element'
        } as WebComponentWrapperOptions
    },

    {
        path: 'angular1',
        component: WebComponentWrapper,
        data: {
            type: 'script',
            remoteEntry: 'https://nice-grass-018f7d910.azurestaticapps.net/remoteEntry.js',
            remoteName: 'angular1',
            exposedModule: './web-components',
            elementName: 'angular1-element'
        } as WebComponentWrapperOptions
    },

    {
        path: 'angular2',
        component: WebComponentWrapper,
        data: {
            type: 'script',
            remoteEntry: 'https://gray-pond-030798810.azurestaticapps.net//remoteEntry.js',
            remoteName: 'angular2',
            exposedModule: './web-components',
            elementName: 'angular2-element'
        } as WebComponentWrapperOptions
    },

    {
        matcher: startsWith('angular3'),
        component: WebComponentWrapper,
        data: {
            type: 'script',
            remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
            remoteName: 'angular3',
            exposedModule: './web-components',
            elementName: 'angular3-element'
        } as WebComponentWrapperOptions
    },

    {
        path: 'vue',
        component: WebComponentWrapper,
        data: {
            type: 'script',
            remoteEntry: 'https://mango-field-0d0778c10.azurestaticapps.net/remoteEntry.js',
            remoteName: 'vue',
            exposedModule: './web-components',
            elementName: 'vue-element'
        } as WebComponentWrapperOptions
    },

    {
        path: 'angularjs',
        component: WebComponentWrapper,
        data: {
            type: 'script',
            remoteEntry: 'https://calm-mud-0a3ee4a10.azurestaticapps.net/remoteEntry.js',
            remoteName: 'angularjs',
            exposedModule: './web-components',
            elementName: 'angularjs-element'
        } as WebComponentWrapperOptions
    },

    {
        matcher: startsWith('angular3'),
        component: WebComponentWrapper,
        data: {
            type: 'script',
            remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
            remoteName: 'angular3',
            exposedModule: './web-components',
            elementName: 'angular3-element'
        } as WebComponentWrapperOptions
    },

    {
        path: '**',
        component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

