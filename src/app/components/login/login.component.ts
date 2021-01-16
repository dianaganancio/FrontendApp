import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UserDTO } from 'src/app/dto/user.dto';
import { User } from 'src/app/model/user.model';
import { StudentDTO } from 'src/app/dto/student.dto';
import { AdminDTO } from 'src/app/dto/admin.dto';
import { UserTransferService } from 'src/app/services/user-transfer/user-transfer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  students: StudentDTO[] = [];
  admins: AdminDTO[] = [];
  student: StudentDTO={
    login:"",name:"",subject:"",password:"",number:0
  }
  admin: AdminDTO={
    login:"",name:"",subject:"",password:"",office:""
  }

  constructor(private Auth: AuthService,
    private utService: UserTransferService,
    private router: Router) { }

  ngOnInit() {
    this.getUsers();
    this.getadmins();
    this.getStudents();
  }

  getUsers(): void {
    this.Auth.getUsers()
      .subscribe(usrs => {
        usrs.forEach(user => {
          this.users.push(user);
        });
      });
  }

  getadmins(): void {
    this.Auth.getadmins()
      .subscribe(admins => {
        admins.forEach(admin => {
          this.admins.push(admin);
        });
      });
  }

  getStudents(): void {
    this.Auth.getStudents()
      .subscribe(students => {
        students.forEach(student => {
          this.students.push(student);
        });
      });
  }

  loginUser(event: any) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    if (this.userExists(username, password)) {
      this.selectUser(username, password);
      if(this.utService.whichSelected === "admin"){
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/student']);
      }
    } else {
      window.alert("Invalid Credentials");
    }
  }

  userExists(username: string, password: string) {
    var bool = false;
    this.users.forEach(user => {
      if (user.login.includes(username) &&
        user.password.includes(password)) {
        bool = true;
      }
    });
    return bool;
  }

  selectUser(username: string, password: string) {
    this.admins.forEach(admin => {
      if (admin.login === username &&
        admin.password === password) {
          this.utService.loggedUser(admin, this.student, "admin");
      }
    });
    this.students.forEach(student => {
      if (student.login === username &&
        student.password === password) {
          this.utService.loggedUser(this.admin, student, "Student");
        }
    });
  }
}
