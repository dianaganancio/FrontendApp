import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user.model';
import { AdminDTO } from 'src/app/dto/admin.dto';
import { StudentDTO } from 'src/app/dto/student.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>('/api/User');
  }

  getUserDetails(login: string, password: string) {
    return this.http.post('/api/User', {
      login,
      password
    });
  }

  getadmins(){
    return this.http.get<AdminDTO[]>('/api/admin/DTO');
  }

  getStudents(){
    return this.http.get<StudentDTO[]>('/api/Student/DTO');
  }
}
