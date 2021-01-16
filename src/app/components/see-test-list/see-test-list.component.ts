import { Component, OnInit } from '@angular/core';
import { UserTransferService } from 'src/app/services/user-transfer/user-transfer.service';
import { TestDTO } from 'src/app/dto/test.dto';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { SavingTestService } from 'src/app/services/saving-test/saving-test.service';

@Component({
  selector: 'app-see-test-list',
  templateUrl: './see-test-list.component.html',
  styleUrls: ['./see-test-list.component.css']
})
export class SeeTestListComponent implements OnInit {

  allTests: TestDTO[]=[];
  size: number = 0;

  constructor(private router: Router,
    private adminService: AdminService,
    private stService: SavingTestService) { }

  ngOnInit() {
    this.getTests();
  }

  getTests(){
    this.adminService.getAllTests()
    .subscribe(tests => {
      this.allTests = tests;
      this.size = this.allTests.length;
    },
      error => {window.alert("Error Retrieving Tests")});
  }

  renderTest(test: TestDTO){
    this.stService.saveTest(test);
    this.router.navigate(['/render-test']);
  }

}
