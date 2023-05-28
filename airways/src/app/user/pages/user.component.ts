import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAuthStore } from 'src/app/redux/models/models';
import { selectFirstName } from 'src/app/redux/selectors/auth.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  public userName: string = 'Viktoryia';
  constructor(private store: Store<{auth: IAuthStore }>) {
    this.store.select(selectFirstName).subscribe((el) => {
      this.userName = el
    })
  }
}
