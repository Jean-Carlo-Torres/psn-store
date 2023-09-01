import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent {

  @Input()
  gameType:string = "PS4/PS5"
  @Input()
  gamePrice:string = "R$ 199,90"
}
