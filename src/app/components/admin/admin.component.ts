import { Component, OnInit } from '@angular/core';
import { UserTransferService } from 'src/app/services/user-transfer/user-transfer.service';
import { Router } from '@angular/router';
import { QuestionDTO } from 'src/app/dto/question.dto';
import { QuestionService } from 'src/app/services/question/question.service';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AnswerDTO } from 'src/app/dto/answer.dto';
import { AdminDTO } from 'src/app/dto/admin.dto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  questions: QuestionDTO[] = [];
  questionToAdd: QuestionDTO = {
    title:"",subject:"",possibleAnswers:[],correctAnswer:{description:""}
  };
  user: AdminDTO={
    login:"",name:"",subject:"",password:"",office:""
  }

  constructor(private adminService: AdminService,
    private questionService: QuestionService,
    private utService: UserTransferService) { }

  ngOnInit() {
    document.body.classList.add(".selector");
    this.getQuestions();
    this.user = this.utService.selectedadmin;
  }

  createQuestion(question: string, answer1: string,
    answer2: string, answer3: string, answer4: string,
    correctAnswer: string, subject: string) {
        this.questionToAdd.title = question;
        this.questionToAdd.subject = subject;
        this.questionToAdd.possibleAnswers.push(new AnswerDTO(answer1));
        this.questionToAdd.possibleAnswers.push(new AnswerDTO(answer2));
        this.questionToAdd.possibleAnswers.push(new AnswerDTO(answer3));
        this.questionToAdd.possibleAnswers.push(new AnswerDTO(answer4));
        this.questionToAdd.correctAnswer = new AnswerDTO(correctAnswer);

        this.questionService.addQuestion(this.questionToAdd)
        .subscribe(response => {
          window.alert("Question Added")
        },
        error => {
          window.alert("Error Adding Question")
        });
  }

  deleteQuestion(question: string){
    this.questionService.deleteQuestion(question)
    .subscribe(response => {
      window.alert("Question Deleted")
    },
    error => {
      window.alert("Error Deleting Question")
    });
  }

  getQuestions() {
    this.questionService.getQuestions()
      .subscribe(questions => {
        questions.forEach(question => {
          this.questions.push(question);
        });
      });
  }
}
