import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from './brands.component';
import {BrandsRoutingModule} from "./brands-routing.module";
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import { BrandProductsComponent } from './components/brands/brand-products/brand-products.component';
import { BrandListComponent } from './components/brands/brand-list/brand-list.component';
import {BrandService} from "./service/brand.service";



@NgModule({
  declarations: [
    BrandsComponent,
    BrandProductsComponent,
    BrandListComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    FlexModule,
    MatCardModule
  ],
  providers: [BrandService]
})
export class BrandsModule { }
