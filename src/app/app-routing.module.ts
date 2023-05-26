import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ManageProductComponent } from './pages/admin/manage-product/manage-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
const routes: Routes = [
  {path: '',component : HomePageComponent },
  {path: 'product',component : ProductListComponent },
  {path: 'product/:id',component : ProductDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
