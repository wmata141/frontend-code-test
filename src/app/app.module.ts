import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CatsService } from './services/cats.service';
import { CatsComponent } from './modules/cats/cats.component';
import { MainComponent } from './modules/main/main.component';
import { CatsPipe } from './pipes/catsFilter/cats.pipe';
import { CatsDetailComponent } from './modules/cats-detail/cats-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    CatsComponent,
    MainComponent,
    CatsPipe,
    CatsDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [CatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
