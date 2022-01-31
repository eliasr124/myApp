import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './componentes/crud/crud.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';

const routes: Routes = [
  { path: 'teste1', component: DataBindingComponent },
  { path: 'testengif', component: NgifNgforComponent },
  { path: 'testeapi', component: CrudComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
