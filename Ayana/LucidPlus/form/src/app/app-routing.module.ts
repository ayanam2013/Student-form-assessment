import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentformModule } from './studentform/studentform.module';

const routes: Routes = [
  {
    path:'',loadChildren:()=>import('./studentform/studentform.module').then(m=>StudentformModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
