import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './pages/page404/page404.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, Page404Component],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: Page404Component }]),
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
