import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavigationpageComponent } from './pages/navigationpage/navigationpage.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavigationPageModule } from './pages/navigationpage/navigationpage.module';
import { CommonModule } from '@angular/common';
import { DataService } from '../app/services/data.service';
const routes: Routes = [
    { path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent },
    {
        path: 'dashboard', 
        component: NavigationpageComponent,
        data: {
			reuse: true
		},
        loadChildren:() => NavigationPageModule,
        runGuardsAndResolvers: 'always'
    },
    { path: '**', component: HomepageComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        MDBBootstrapModule,
        CommonModule
    ],
    exports: [RouterModule],
    declarations: [ ],
    providers: [DataService]

})
export class AppRoutingModule { }
