import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-method';

  // myform = new FormGroup({
  //   name : new FormControl(''),
  //   lastname : new FormControl(''),
  //   phone : new FormArray([new FormControl('')])
  // })

  myform = new FormGroup({
    name : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.email,Validators.required]),
    phone : new FormArray([])
  })

  addPhone(){
    console.warn('click')
  }

  onsubmit(){
    console.info(this.myform.value)
  }
}
