import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

// Services
import { RequestOptionsService } from './services/request-options.service';

// Routes
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)

    // Custom Modules
  ],
  providers: [
    { provide: RequestOptions, useClass: RequestOptionsService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
