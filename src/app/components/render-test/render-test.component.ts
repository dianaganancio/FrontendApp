import { Component, OnInit } from '@angular/core';
import { AnswerToQuestionDTO } from 'src/app/dto/answer-to-question.dto';
import { TestResultDTO } from 'src/app/dto/test-result.dto';
import { TestDTO } from 'src/app/dto/test.dto';
import { AdminService } from 'src/app/services/admin/admin.service';
import { SavingTestService } from 'src/app/services/saving-test/saving-test.service';

@Component({
  selector: 'app-render-test',
  templateUrl: './render-test.component.html',
  styleUrls: ['./render-test.component.css']
})
export class RenderTestComponent implements OnInit {

  test: TestDTO = {testName:"",questions:[]};
  answersToQuestions: AnswerToQuestionDTO[]=[];
  testResults: TestResultDTO[]=[];
  numberOfGrades: number = 0
  
  constructor(private stService: SavingTestService,
    private adminService: AdminService) { }

  ngOnInit() {
    this.loadSelectedTest();
    this.getStudentsGrade();
  }

  loadSelectedTest(){
    this.test = this.stService.test;
    this.test.questions.forEach(question => {
      this.answersToQuestions.push({answer: {description: ""}, question: question});
    });
  }

  getStudentsGrade(){
    this.adminService.getTestResults(this.test.testName)
    .subscribe(testResults => {
      this.testResults = testResults;
      this.numberOfGrades = this.testResults.length;
    });
  }
}
