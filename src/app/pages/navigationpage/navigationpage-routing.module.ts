import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationpageComponent } from './navigationpage.component';
import { SecondPageComponent } from '../second-page/second-page.component';
import { ThirdPageComponent } from '../third-page/third-page.component';

const routes: Routes = [
    { 
        path: '', 
        component: SecondPageComponent,
        pathMatch: 'full',
		
    },
    { path: 'secondPage', component: SecondPageComponent },
    { path: 'thirdPage', component: ThirdPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationPageRoutingModule { }
