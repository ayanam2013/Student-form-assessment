import { Component } from '@angular/core';
import {  Validators, FormGroup ,FormControl} from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
 
  item:any;
  
  changeitems:any;
 constructor(private studentservice:StudentService, ){
   

 }
 studentForm=new FormGroup({
  studentName:new FormControl('',[Validators.required]),
  dateOfBirth:new  FormControl('',[Validators.required]),
  nationality:new FormControl('',[Validators.required]),
  gender:new FormControl('',[Validators.required]),

})





get studentName(){
 return this.studentForm.get('studentName')
}
get  dateOfBirth(){
 return this.studentForm.get('dateOfBirth')
}
get nationality(){
 return this.studentForm.get('nationality')
}
get  gender(){
 return this.studentForm.get('gender')
}
onSubmit(formsdata:any){
 
  this.studentservice.addStudent(formsdata).subscribe(adddata=>{
     console.log(adddata);
     alert(' student added successfully ');
     this.studentForm.reset();
  
   })
   ;
}
}