import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    NgifNgforComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyloadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
