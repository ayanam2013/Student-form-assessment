import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
    children:[
    
      {path:'addstudent',component:StudentFormComponent},
      {path:'liststudent',component:ListStudentComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentformRoutingModule { }
