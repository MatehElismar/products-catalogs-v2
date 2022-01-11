import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input("data") product: IProduct;
  
  constructor() {
      this.product = {
        id: 0,
        name: "",
        description:"",
        image:'',
        price: 0,
      };
  }

  ngOnInit(): void {
  }
}
