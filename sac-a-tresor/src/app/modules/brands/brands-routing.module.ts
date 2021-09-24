import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {BrandsComponent} from "./brands.component";
import {BrandProductsComponent} from "./components/brands/brand-products/brand-products.component";
import {BrandListComponent} from "./components/brands/brand-list/brand-list.component";


const routes: Routes = [
  {
    path: '',
    component: BrandsComponent,
    children: [
      {path: '', component: BrandListComponent},
      {path: ':name', component: BrandProductsComponent},
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class BrandsRoutingModule { }
