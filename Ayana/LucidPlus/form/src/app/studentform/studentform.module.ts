import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentformRoutingModule } from './studentform-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentFormComponent } from './components/student-form/student-form.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { StudentHeaderComponent } from './components/student-header/student-header.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    StudentHeaderComponent,
    StudentFormComponent,ListStudentComponent,StudentHeaderComponent,HomeComponent
  ],
  imports: [
    CommonModule,
    StudentformRoutingModule,
    ReactiveFormsModule,
    FormsModule ,
   ]
})
export class StudentformModule { }
