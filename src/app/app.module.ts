import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FighterModule } from './fighter/fighter.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InMemoryDataService } from './in-memory-data.service';
import { AddFighterComponent } from './fighter/add-fighter/add-fighter.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    // AddFighterComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,  {dataEncapsulation: false}),
    FighterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
