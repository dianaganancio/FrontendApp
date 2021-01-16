import { Component, OnInit } from '@angular/core';
import { SavingTestService } from 'src/app/services/saving-test/saving-test.service';
import { UserTransferService } from 'src/app/services/user-transfer/user-transfer.service';
import { TestDTO } from 'src/app/dto/test.dto';
import { AnswerToQuestionDTO } from 'src/app/dto/answer-to-question.dto';
import { QuestionDTO } from 'src/app/dto/question.dto';
import { TestAnswerDTO } from 'src/app/dto/test-answer.dto';
import { SavingTestAnswersService } from 'src/app/services/saving-test-answers/saving-test-answers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solve-test',
  templateUrl: './solve-test.component.html',
  styleUrls: ['./solve-test.component.css']
})
export class SolveTestComponent implements OnInit {

  test: TestDTO = {testName:"",questions:[]};
  answersToQuestions: AnswerToQuestionDTO[]=[];
  testSolved: TestAnswerDTO = {test: {testName:"",questions:[]},
  student:{login:"",name:"",number:0,password:"",subject:""},
  answersToQuestions:[]};

  constructor(private stService: SavingTestService,
    private router: Router,
    private staService: SavingTestAnswersService,
    private utService: UserTransferService) { }

  ngOnInit() {
    this.loadSelectedTest();
  }

  loadSelectedTest(){
    this.test = this.stService.test;
    this.test.questions.forEach(question => {
      this.answersToQuestions.push({answer: {description: ""}, question: question});
    });
  }

  handleChange(event: any, question: QuestionDTO){
    this.answersToQuestions.forEach(atq => {
      if(atq.question.title === question.title){
        question.possibleAnswers.forEach(answer => {
          if(answer.description === event.target.value){
            atq.answer = answer;
          }
        });
      }
    });
  }

  submitAnswers(){
    this.testSolved.test = this.test;
    this.testSolved.student = this.utService.selectedStudent;
    this.testSolved.answersToQuestions = this.answersToQuestions;
    this.staService.saveTestAnswers(this.testSolved)
    .subscribe(data => {
      window.alert("Your grade is: " + data)
      this.router.navigate(['/student']);
    },
    error => {
      window.alert("Error saving the results");
      this.router.navigate(['/student']);
    });
  }

}
