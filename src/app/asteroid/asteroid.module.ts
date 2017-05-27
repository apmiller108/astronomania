import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

// Containers
import { AsteroidsComponent } from './containers/asteroids/asteroids.component';
import { AsteroidViewerComponent } from './containers/asteroid-viewer/asteroid-viewer.component';

// Components
import { AsteroidDetailComponent } from './components/asteroid-detail/asteroid-detail.component';
import { PaginatorComponent } from '../shared/paginator/paginator.component';

// Services
import { AsteroidService } from './services/asteroid.service';
import { AsteroidsResolver } from './services/asteroids-resolver.service';
import { AsteroidResolver } from './services/asteroid-resolver.service';

const routes: Routes = [
  {
    path: 'asteroids',
    children: [
      {
        path: '',
        component: AsteroidsComponent,
        resolve: { asteroidsResponse: AsteroidsResolver }
      },
      {
        path: ':id',
        component: AsteroidViewerComponent,
        resolve: { asteroid: AsteroidResolver }
      }
    ]
  }
];

@NgModule({
  declarations: [
    AsteroidsComponent,
    AsteroidDetailComponent,
    AsteroidViewerComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    AsteroidService,
    AsteroidResolver,
    AsteroidsResolver
  ]
})

export class AsteroidModule {}
