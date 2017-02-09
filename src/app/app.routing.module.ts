import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuardService } from './auth/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routs: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'home', component: HomeComponent },
        {
          path: 'auth',
          loadChildren: 'app/auth/auth.module#AuthModule',
          //canLoad: [AuthGuardService]
        },
        {
          path: 'resume-version',
          loadChildren: 'app/resume-version/resume-version.module#ResumeVersionModule',
          //canLoad: [AuthGuardService]
        },
        {
          path: 'resume-template',
          loadChildren: 'app/resume-template/resume-template.module#ResumeTemplateModule'
        },
        { path:"**", component: NotFoundComponent}
        
    ];

@NgModule({
  imports: [ RouterModule.forRoot(routs) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
