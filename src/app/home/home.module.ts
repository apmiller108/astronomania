import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Containers
import { HomeComponent } from './containers/home.component';

// Components

// Services

const routes: Routes = [
  { path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})

export class HomeModule {}
