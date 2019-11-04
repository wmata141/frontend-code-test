import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsComponent } from './modules/cats/cats.component';
import { MainComponent } from './modules/main/main.component';
import { CatsDetailComponent } from './modules/cats-detail/cats-detail.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'cats', component: CatsComponent},   
  { path: 'cats-detail/:id', component: CatsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
