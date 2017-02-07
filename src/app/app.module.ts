import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CovalentCoreModule } from '@covalent/core';
//import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
//import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { MdlModule } from 'angular2-mdl';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    //MdlModule,
    CovalentCoreModule.forRoot(),
    //AuthModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [AppRoutingModule],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
