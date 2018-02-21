import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BsNavbarComponent } from 'app/core/components/bs-navbar/bs-navbar.component';
import { LoginComponent } from 'app/core/components/login/login.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    LoginComponent
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
