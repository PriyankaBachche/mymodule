import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [{path:'add-category',component:AddCategoryComponent},
{path:'category-list',component:CategoryListComponent},
{path:'category-list/:id',component:AddCategoryComponent},
{path:'',component:CategoryListComponent}] 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
