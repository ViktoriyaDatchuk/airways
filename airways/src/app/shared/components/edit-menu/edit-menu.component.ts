import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
})
export class EditMenuComponent {
  @Output() deleteItem = new EventEmitter<string>();

  deleteTrip(e: Event) {
    const numberOfFlight = (e.currentTarget as HTMLElement)
      .closest('.dots-row')
      ?.parentElement?.getElementsByClassName('number-row')[0].innerHTML;
    this.deleteItem.emit(numberOfFlight);
  }
}
