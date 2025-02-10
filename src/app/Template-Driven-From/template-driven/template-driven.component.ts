import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {
 shows(u:any, p:any,group:any) {
   console.log(u, p, group)
   console.log(u,p)
  }

  submitForm(username: any, password: any, form: any) {
    // Mark all fields as touched
    username.control.markAsTouched();
      password.control.markAsTouched();
      
    // Check if the form is valid
    if (form.valid) {
      console.log('Form submitted successfully!');
      console.log(form)
      console.log('Username:', username.value);
      console.log('Password:', password.value);
    } else {
      console.log('Form is invalid. Please fill out all required fields.');
    }
  }

  show(form: any) {
    // form.value.uname="HELLO" //not not update input field and form
    console.log(form)
    console.log(form.value.uname)
    // form.setValue({
    //   'uname': "PRADEEP",
    //   'pwd':"PRADEEP@123"
    // })
    form.control.patchValue({
      'uname': "PRADEEP"
    })
    console.log(form.value.uname)
    
  }
}
