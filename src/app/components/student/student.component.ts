import { Component, OnInit } from '@angular/core';
import { UserTransferService } from 'src/app/services/user-transfer/user-transfer.service';
import { TestDTO } from 'src/app/dto/test.dto';
import { StudentService } from 'src/app/services/student/student.service';
import { Router } from '@angular/router';
import { SavingTestService } from 'src/app/services/saving-test/saving-test.service';
import { StudentDTO } from 'src/app/dto/student.dto';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  tests: TestDTO[]=[];
  size: number = 0;
  user: StudentDTO={
    login:"",name:"",subject:"",password:"",number:0
  }

  constructor(private utService: UserTransferService,
    private studentService: StudentService,
    private router: Router,
    private stService: SavingTestService) { }

  ngOnInit() {
    this.getTests();
    this.user = this.utService.selectedStudent;
  }

  getTests(){
    this.studentService.getTests()
    .subscribe(tests => {
      this.tests = tests;
      this.size = this.tests.length;
    },
      error => {window.alert("Error Retrieving Tests")});
  }

  solveTest(test: TestDTO){
    this.stService.saveTest(test);
    this.router.navigate(['/solve-test']);
  }

}
