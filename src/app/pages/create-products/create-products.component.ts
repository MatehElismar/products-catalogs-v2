import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss'],
})
export class CreateProductsComponent implements OnInit {
  productsForm: FormGroup;

  constructor(fb: FormBuilder, private products:ProductsService,private router:Router) {
    this.productsForm = fb.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      unit: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  save(){
    console.log(this.productsForm.value);

    const v = this.productsForm.value;

    const data = {
      id: Date.now(),
      name: v.name,
      image: v.image,
      description: v.description,
      price: v.price,
      unit: v.unit
    };

    this.products.addProduct(data).subscribe(added =>{
      this.router.navigate(['home']);
    });

  }
}
