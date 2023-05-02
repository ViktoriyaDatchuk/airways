import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'booking',
    loadChildren: () =>
      import('./booking/booking.module').then((mod) => mod.BookingModule),
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
