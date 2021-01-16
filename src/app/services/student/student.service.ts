import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestDTO } from 'src/app/dto/test.dto';
import { UserTransferService } from '../user-transfer/user-transfer.service';
import { TestResultDTO } from 'src/app/dto/test-result.dto';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient,
    private utService: UserTransferService) { }

    getTests(){
    return this.http.get<TestDTO[]>('/api/Student/GetTests/'
     + this.utService.selectedStudent.login);
  }

  getGrades(num: number){
    return this.http.get<TestResultDTO[]>('/api/Student/CheckGrades/' + num);
  }

}