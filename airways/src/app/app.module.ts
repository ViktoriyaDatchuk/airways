import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { bookingReducer } from './redux/reducers/booking.reducer';
import { settingsReducer } from './redux/reducers/settings.reducer';
import { HttpClientModule } from '@angular/common/http';
import { cartReducer } from './redux/reducers/cart.reducer';
import { userReducer } from './redux/reducers/user.reducer';
import { authReducer } from './redux/reducers/auth.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      booking: bookingReducer,
      settings: settingsReducer,
      cart: cartReducer,
      user: userReducer,
      auth: authReducer }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
