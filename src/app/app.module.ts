import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from './Material/materia';
import { ServiciosService } from './services/servicios.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';





@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers:[ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
