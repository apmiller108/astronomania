import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// Containers
import { AsteroidsComponent } from './containers/asteroids/asteroids.component';

// Components

// Services
import { AsteroidService } from './services/asteroid.service';
import { AsteroidResolver } from './services/asteroid-resolver.service';

const routes: Routes = [
  {
    path: 'asteroids',
    children: [
      {
        path: '',
        component: AsteroidsComponent,
        resolve: { asteroids: AsteroidResolver }
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
    AsteroidService,
    AsteroidResolver
  ]
})

export class AsteroidModule {}
