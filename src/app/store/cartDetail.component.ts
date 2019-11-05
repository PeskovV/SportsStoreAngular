import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
    template: '<div><h3 class="bg-info m-1 p-1">Cart detail component</h3></div>',
    templateUrl: "cartDetail.component.html"
})

export class CartDetailComponent {
    constructor(public cart: Cart) { }
}