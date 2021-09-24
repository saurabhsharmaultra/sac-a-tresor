import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'brands',
    loadChildren : () => import('./modules/brands/brands.module').then(m => m.BrandsModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/brands'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
