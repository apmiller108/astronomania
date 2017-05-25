import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// Containers
import { AsteroidsComponent } from './containers/asteroids/asteroids.component';

// Components
import { AsteroidDetailComponent } from './components/asteroid-detail/asteroid-detail.component';

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
        resolve: { asteroidsResponse: AsteroidResolver }
      },
      // {
      //   path: ':id',
      //   component: AsteroidViewerComponent }
      // }
    ]
  }
]

@NgModule({
  declarations: [
    AsteroidsComponent,
    AsteroidDetailComponent
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
