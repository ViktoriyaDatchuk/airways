import { NgModule } from '@angular/core';
import { Page404Component } from './pages/page404/page404.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, Page404Component, AuthComponent, LoginComponent, SignupComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: Page404Component }]),
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
