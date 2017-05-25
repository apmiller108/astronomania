import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// Containers
import { AsteroidsComponent } from './containers/asteroids/asteroids.component';

// Components

// Services
import { AsteroidService } from './services/asteroid.service';

const routes: Routes = [
  {
    path: 'asteroids',
    children: [
      {
        path: '', component: AsteroidsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AsteroidsComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AsteroidService
  ]
})

export class AsteroidModule {}
