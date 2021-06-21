import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  registerForm: FormGroup;
  submitted:boolean= false;

  constructor( private formBuilder: FormBuilder){}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['',{updateOn: 'blur', Validators: Validators.required}],
        lastName: ['', Validators.required],
        address: this.formBuilder.group({
          street:[],
          zip:[],
          city:[]
        })
      });
  }
}
