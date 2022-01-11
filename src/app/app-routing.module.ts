import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductsComponent } from './pages/create-products/create-products.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'create-product',
    component: CreateProductsComponent,
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
