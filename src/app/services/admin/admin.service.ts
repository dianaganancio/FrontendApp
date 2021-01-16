import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestDTO } from 'src/app/dto/test.dto';
import { UserTransferService } from '../user-transfer/user-transfer.service';
import { TestResultDTO } from 'src/app/dto/test-result.dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,
    private utService: UserTransferService) { }

    generateTest(nQuestions: number, testName: string){
      return this.http.get<TestDTO>('/api/Test/GenerateTest/'
       + nQuestions + '/'
       + this.utService.selectedadmin.login + '/'
       + testName);
    }

    getAllTests(){
      return this.http.get<TestDTO[]>('/api/Test/GetTests');
    }

    getTestResults(testName: string){
      return this.http.get<TestResultDTO[]>('/api/TestResult/GetAllResults/' + testName);
    }
}
