import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Feature Modules
import { HomeModule } from './home/home.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/containers/home.component';
import { NotFoundComponent } from './not-found.component';

// Services
import { RequestOptionsService } from './services/request-options.service';

// Routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),

    // Custom Modules
    HomeModule
  ],
  providers: [
    { provide: RequestOptions, useClass: RequestOptionsService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
