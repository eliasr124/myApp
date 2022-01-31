import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './componentes/crud/crud.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';

const routes: Routes = [
  {path: '', component: NgifNgforComponent},
  {path: 'lazy', loadChildren: () => import('./modules/lazyloading/lazyloading.module').then(
    m => m.LazyloadingModule
  )},
  { path: 'teste1', component: DataBindingComponent },
  { path: 'testeapi', component: CrudComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
