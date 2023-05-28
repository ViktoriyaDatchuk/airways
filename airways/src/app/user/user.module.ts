import { NgModule } from '@angular/core';
import { UserComponent } from './pages/user.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: ':name ', component: UserComponent }]),
  ],
})
export class UserModule {}
