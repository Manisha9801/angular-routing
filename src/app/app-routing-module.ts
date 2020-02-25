import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NewPageComponent } from './new-page/new-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { HomePageComponent} from './home-page/home-page.component';


/**
* class to define the routes for routing
*/
export const routes: Routes = [
    {
        path: '', component: HomePageComponent
    },
    {
        path: 'homePage', component: HomePageComponent
    },
    {
        path: 'newPage', component: NewPageComponent
    },
    {
        path: 'firstPage', component: FirstPageComponent
    },
    {
        path: 'secondPage', component: SecondPageComponent
    },
    {
        path: '**', redirectTo: ''
    }
];


