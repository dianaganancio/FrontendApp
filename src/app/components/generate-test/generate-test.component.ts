import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-test',
  templateUrl: './generate-test.component.html',
  styleUrls: ['./generate-test.component.css']
})
export class GenerateTestComponent implements OnInit {

  num: number = 0;
  testName: string = "";

  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit() {
  }

  generateTest(event: any){
    event.preventDefault();
    const target = event.target;
    this.testName = target.querySelector('#testName').value;
    this.adminService.generateTest(this.num, this.testName)
    .subscribe(data => {
      window.alert("Test Generated With Success");
      this.router.navigate(['/admin']);
  },
      error => {window.alert("Error Generating Test");
      this.router.navigate(['/admin']);
    });
  }

  handleChange(event: any){
    this.num = event.target.value;
  }
}
