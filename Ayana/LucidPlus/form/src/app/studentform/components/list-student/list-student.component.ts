import { Component } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { student } from 'src/app/service/student';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
  item:student[]=[];
  constructor(private studentservice:StudentService) {

  }
  ngOnInit() {
    this.studentservice.getStudent().subscribe(result => {
      this.item = result;
      console.log(this.item);
      
    })
  }
  deleteData(id:string) {
    this.studentservice.deletePost(id).subscribe(() => {
      this.item= this.item.filter(list =>list.id !==String(id))
    });
  }
  Edit(){
    
  }
}
