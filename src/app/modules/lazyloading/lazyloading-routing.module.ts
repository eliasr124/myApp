import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelazyComponent } from 'src/app/componentes/homelazy/homelazy.component';
import { FooterComponent } from './../../componentes/footer/footer.component';
import { HeaderComponent } from './../../componentes/header/header.component';

const routes: Routes = [
  {path: '', component: HomelazyComponent, 
  children: [
    {path: 'header', component: HeaderComponent},
    {path: 'footer', component: FooterComponent}
  ]}
];

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomelazyComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
