import { NgModule } from '@angular/core';
import { UserComponent } from './pages/user.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { aboutGuard } from '../shared/guards/auth.guard';

@NgModule({
  declarations: [UserComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: ':name ', component: UserComponent, canActivate: [aboutGuard] }]),
  ],
})
export class UserModule {}
