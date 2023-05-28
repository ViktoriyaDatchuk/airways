import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: MainComponent }]),
  ],
  exports: [],
})
export class MainModule {}
