import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseurl="http://localhost:3000/student";
  constructor(private http:HttpClient) { }
  addStudent(data:any):Observable<any>{
return this.http.post(this.baseurl,data);
  }
  getStudent():Observable<any>{
    return this.http.get(this.baseurl)

  }
  deletePost(id:string): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`);
  }
}
