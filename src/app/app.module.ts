import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminModule } from 'admin/admin.module';
import { AdminAuthGuard } from 'admin/services/admin-auth-guard.service';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from 'app/app.component';
import { LoginComponent } from 'app/core/components/login/login.component';
import { CoreModule } from 'app/core/core.module';
import { ProductsComponent } from 'app/shopping/components/products/products.component';
import { ShoppingModule } from 'app/shopping/shopping.module';
import { environment } from 'environments/environment';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent},
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
