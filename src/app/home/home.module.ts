import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// Containers
import { HomeComponent } from './containers/home.component';

// Components
import { ApodComponent } from './components/apod/apod.component';
import { HeroComponent } from './components/hero/hero.component';

// Services
import { HomeService } from './services/home.service';
import { HomeResolver } from './services/home-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: { apod: HomeResolver}
  }
];

@NgModule({
  declarations: [
    ApodComponent,
    HeroComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    HomeService,
    HomeResolver
  ]
})

export class HomeModule {}
