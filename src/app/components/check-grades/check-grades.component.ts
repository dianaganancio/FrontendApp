import { Component, OnInit } from '@angular/core';
import { UserTransferService } from 'src/app/services/user-transfer/user-transfer.service';
import { StudentService } from 'src/app/services/student/student.service';
import { Router } from '@angular/router';
import { TestResultDTO } from 'src/app/dto/test-result.dto';

@Component({
  selector: 'app-check-grades',
  templateUrl: './check-grades.component.html',
  styleUrls: ['./check-grades.component.css']
})
export class CheckGradesComponent implements OnInit {

  testResults: TestResultDTO[]=[];
  size: number = 0;

  constructor(private utService: UserTransferService,
    private studentService: StudentService,
    private router: Router) { }

  ngOnInit() {
    this.getGrades();
  }

  getGrades(){
    this.studentService.getGrades(this.utService.selectedStudent.number)
    .subscribe(testResults => {
      this.testResults = testResults;
      this.size = this.testResults.length;
    },
    error => {
      window.alert("Error Getting Grades");
      this.router.navigate(['/student']);
    });
  }

}
