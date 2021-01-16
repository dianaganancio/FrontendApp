import { Injectable } from '@angular/core';
import { TestDTO } from 'src/app/dto/test.dto';

@Injectable({
  providedIn: 'root'
})
export class SavingTestService {

    test: TestDTO = {testName:"",questions:[]};;
    
    constructor() { }

    saveTest(t: TestDTO){
        this.test = t;
    }
    
}