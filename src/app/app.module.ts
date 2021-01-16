import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { SolveTestComponent } from './components/solve-test/solve-test.component';
import { CheckGradesComponent } from './components/check-grades/check-grades.component';
import { GenerateTestComponent } from './components/generate-test/generate-test.component';
import { SeeTestListComponent } from './components/see-test-list/see-test-list.component';
import { RenderTestComponent } from './components/render-test/render-test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    AdminComponent,
    HomeComponent,
    AddQuestionComponent,
    SolveTestComponent,
    CheckGradesComponent,
    GenerateTestComponent,
    SeeTestListComponent,
    RenderTestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'student',
        component: StudentComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'add-question',
        component: AddQuestionComponent
      },
      {
        path: 'solve-test',
        component: SolveTestComponent
      },
      {
        path: 'check-grades',
        component: CheckGradesComponent
      },
      {
        path: 'generate-test',
        component: GenerateTestComponent
      },
      {
        path: 'see-test-list',
        component: SeeTestListComponent
      },
      {
        path: 'render-test',
        component: RenderTestComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
