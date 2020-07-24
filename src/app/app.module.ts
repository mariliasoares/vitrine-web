import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListResponsiveModule } from './lib/mat-grid-list-responsive/mat-grid-list-responsive.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatPaginatorModule, FlexLayoutModule, MatGridListModule, MatGridListResponsiveModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
