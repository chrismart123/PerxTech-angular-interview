//Core imports
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr-BE';
registerLocaleData(localeFr, 'fr')
import { BtnDirective } from '../../directives/btn.directive';
//Lib imports
//FontAwesome, GoogleMap, ...

//Module imports
import { NavigationPageRoutingModule } from './navigationpage-routing.module';

//Imported components

//Components
import { NavigationpageComponent } from './navigationpage.component';
import { NavbarComponent } from './../../component/navbar/navbar.component';
import { SecondPageComponent } from './../../pages/second-page/second-page.component';
import { ThirdPageComponent } from './../../pages/third-page/third-page.component';

@NgModule({
  declarations: [
    NavigationpageComponent,
    NavbarComponent,
    SecondPageComponent,
    ThirdPageComponent,
    BtnDirective
  ],
  imports: [
    CommonModule,
    NavigationPageRoutingModule,
  ]
})
export class NavigationPageModule { }
