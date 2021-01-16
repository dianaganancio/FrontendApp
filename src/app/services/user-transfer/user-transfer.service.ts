import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminDTO } from 'src/app/dto/admin.dto';
import { StudentDTO } from 'src/app/dto/student.dto';

@Injectable({
  providedIn: 'root'
})
export class UserTransferService {

    selectedadmin: AdminDTO = {
        login:"",name:"",subject:"",password:"",office:""
      };
    selectedStudent: StudentDTO = {
        login:"",name:"",subject:"",password:"",number:0
      };
    whichSelected: string = "";

    constructor(private http: HttpClient) { }

    loggedUser(admin: AdminDTO, student: StudentDTO, selected: string){
        this.whichSelected = selected;
        this.selectedadmin = admin;
        this.selectedStudent = student;
    }
}