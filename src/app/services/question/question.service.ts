import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user.model';
import { QuestionDTO } from 'src/app/dto/question.dto';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestions(){
    return this.http.get<QuestionDTO[]>('/api/Question/DTO');
  }

  addQuestion(question: QuestionDTO){
    return this.http.post<QuestionDTO>('/api/Question', question);
  }

  deleteQuestion(question: string){
    return this.http.delete('/api/Question/' + question);
  }

}
