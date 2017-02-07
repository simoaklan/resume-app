import { NgModule } from '@angular/core';
//import { MdlModule } from 'angular2-mdl';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth.routing.module';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports: [
    SharedModule,    
    AuthRoutingModule,
    //MdlModule
  ],
  declarations: [AuthComponent, SignUpComponent, ResetPasswordComponent, LoginComponent],
  providers: [AuthGuardService],
  exports:[AuthComponent]
})
export class AuthModule { }
