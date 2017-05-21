import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { AppComponent } from './app.component';

// Services
import { RequestOptionsService } from './services/request-options.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    CommonModule,
    RouterModule,

    // Custom Modules
  ],
  providers: [
    { provide: RequestOptions, useClass: RequestOptionsService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
