import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './modules/cats/cats.component';
import { CatsDetailComponent } from './modules/cats-detail/cats-detail.component';
import { LandingComponent } from './modules/landing/landing.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { CategoriesDetailComponent } from './modules/categories-detail/categories-detail.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'cats', component: CatsComponent},   
  { path: 'cats-detail/:id', component: CatsDetailComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories-detail/:id', component: CategoriesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
