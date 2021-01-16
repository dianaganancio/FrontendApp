import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { StudentComponent } from './components/student/student.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { SolveTestComponent } from './components/solve-test/solve-test.component';
import { CheckGradesComponent } from './components/check-grades/check-grades.component';
import { GenerateTestComponent } from './components/generate-test/generate-test.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'student', component: StudentComponent },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'solve-test', component: SolveTestComponent },
  { path: 'check-grades', component: CheckGradesComponent },
  { path: 'generate-test', component: GenerateTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
