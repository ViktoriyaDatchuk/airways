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
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
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
