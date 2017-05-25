import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// Containers
import { AsteroidsComponent } from './containers/asteroids/asteroids.component';

// Components

// Services

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
  ]
})

export class AsteroidModule {}
