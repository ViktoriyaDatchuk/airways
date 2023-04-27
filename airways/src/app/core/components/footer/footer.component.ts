import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  public icons!: string[];

  ngOnInit(): void {
    this.icons = [
      '../../../../assets/payment-icons/master-card.svg',
      '../../../../assets/payment-icons/pay.svg',
      '../../../../assets/payment-icons/american-express.svg',
      '../../../../assets/payment-icons/visa.svg',
    ];
  }
}
