import { Component, OnInit } from '@angular/core';
import { UserTransferService } from 'src/app/services/user-transfer/user-transfer.service';
import { QuestionService } from 'src/app/services/question/question.service';
import { Router } from '@angular/router';
import { QuestionDTO } from 'src/app/dto/question.dto';
import { AnswerDTO } from 'src/app/dto/answer.dto';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  question: QuestionDTO = {
    title:"",subject:"",possibleAnswers:[],correctAnswer:{description:""}
  }
  correctAnswer: string="";
  option1: string="";
  option2: string="";
  option3: string="";
  option4: string="";

  constructor(private utService: UserTransferService,
    private questionService: QuestionService,
    private router: Router) { }

  ngOnInit() {
  }

  addQuestion(event: any){
    event.preventDefault();
    const target = event.target;
    this.question.title = target.querySelector('#question').value;
    this.question.possibleAnswers.push(new AnswerDTO(target.querySelector('#option1').value));
    this.question.possibleAnswers.push(new AnswerDTO(target.querySelector('#option2').value));
    this.question.possibleAnswers.push(new AnswerDTO(target.querySelector('#option3').value));
    this.question.possibleAnswers.push(new AnswerDTO(target.querySelector('#option4').value));
    this.question.correctAnswer = new AnswerDTO(this.correctAnswer);
    this.question.subject = this.utService.selectedadmin.subject;

    this.questionService.addQuestion(this.question)
    .subscribe(data => {
      window.alert("Question Added Successfully");
      this.router.navigate(['/admin']);
    },
    error => {
      window.alert("Error Adding Question");
      this.router.navigate(['/admin']);
    });
  }

  handleChange(event: any){
    const target = event.target;
    if(event.target.value == 1){
      this.correctAnswer = this.option1;
    }
    if(event.target.value == 2){
      this.correctAnswer = this.option2;
    }
    if(event.target.value == 3){
      this.correctAnswer = this.option3;
    }
    if(event.target.value == 4){
      this.correctAnswer = this.option4;
    }
  }
}
