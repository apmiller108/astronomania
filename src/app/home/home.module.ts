import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// Containers
import { HomeComponent } from './containers/home.component';

// Components
import { ApodComponent } from './components/apod.component';

// Services
import { HomeService } from './home.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    ApodComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    HomeService
  ]
})

export class HomeModule {}
