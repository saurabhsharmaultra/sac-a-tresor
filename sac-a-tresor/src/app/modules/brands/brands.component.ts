import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands: any;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  test() {
    debugger;
    this.router.navigate(['brands', 'test']);
  }

}
