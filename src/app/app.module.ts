import { ProductService } from './product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ProductTbComponent } from './product-tb/product-tb.component';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { FindsComponent } from './finds/finds.component';


@NgModule({
  declarations: [
    AppComponent,
    FindsComponent,
    ProductTbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    TooltipModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
