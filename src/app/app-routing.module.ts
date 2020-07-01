import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModlpruebaComponent } from './modlprueba/modlprueba.component';


const routes: Routes = [
  {path:"/pruebas", component: ModlpruebaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
