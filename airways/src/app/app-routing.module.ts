import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main/main.module').then((mod) => mod.MainModule),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((mod) => mod.BookingModule),
  },
  {
    path: 'passenger',
    loadChildren: () =>
      import('./passenger/passenger.module').then((m) => m.PassengerModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./core/core.module').then((mod) => mod.CoreModule),
  },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
