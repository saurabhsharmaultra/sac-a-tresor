import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BrandService} from "../../../service/brand.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-brand-products',
  templateUrl: './brand-products.component.html',
  styleUrls: ['./brand-products.component.scss']
})
export class BrandProductsComponent implements OnInit {

  public productsObservable$: Observable<any> | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrandData();
  }

  private getBrandData() {
    this.activatedRoute.params.subscribe((params) => {
      const path = `./assets/data/${params.name}.json`;
      this.productsObservable$ = this.brandService.getJSON(path);
    });
  }

}
