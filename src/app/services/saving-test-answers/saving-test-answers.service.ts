import { Injectable } from '@angular/core';
import { TestAnswerDTO } from 'src/app/dto/test-answer.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SavingTestAnswersService {
    
    constructor(private http: HttpClient) { }

    saveTestAnswers(testSolved: TestAnswerDTO){
        return this.http.post<number>('/api/TestAnswer/SaveAnswers', testSolved);
    }
    
}