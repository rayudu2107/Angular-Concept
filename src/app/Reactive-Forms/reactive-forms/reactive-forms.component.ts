import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

// reactive form

  regForm = new FormGroup({
    uname: new FormControl("",[Validators.required,Validators.minLength(8)]),
    pwd:new FormControl("",[Validators.required,Validators.minLength(8)])
  })
  
  submit() {
    // Mark all fields as "touched" to display validation messages
    Object.keys(this.regForm.controls).forEach((field) => {
      const control = this.regForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });

    // Check form validity and log the form values or error
    if (this.regForm.valid) {
      console.log('Form submitted successfully!', this.regForm.value);
    } else {
      console.log('Form is invalid. Please correct the errors.');
    }
  }

  // FormArray
  
  testForm = new FormGroup({
    mobileNums: new FormArray([
      new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
    ]),
  });

  // Getter for mobileNums FormArray
  get mobileNums(): FormArray {
    return this.testForm.get('mobileNums') as FormArray;
  }

  // Add a new mobile number field
  addMobileNumber() {
    this.mobileNums.push(new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]));
  }

// Delete a mobile number field by index
deleteMobileNumber(index: number) {
  if (this.mobileNums.length > 1) {  // Prevent removing the last remaining field
    this.mobileNums.removeAt(index);
  }
}

// Submit handler
onSubmit() {
  if (this.testForm.valid) {
    console.log('Form Submitted:', this.testForm.value);
    
    // Reset the form
    this.testForm.reset();

    // Clear all mobile number fields
    this.mobileNums.clear();

    // Ensure at least one mobile input remains after reset
    this.mobileNums.push(new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]));
  } else {
    console.log('Form is invalid!');
    this.testForm.markAllAsTouched(); // Show validation errors
  }
}


  
  // form builder
  
   regForms: FormGroup;  

  constructor(private fb: FormBuilder) {
    this.regForms = this.fb.group({
      name: ['', Validators.required],  
      email: ['', [Validators.required, Validators.email]],  
      mobile: this.fb.array([
        this.createMobileControl()
      ]),
    });
  }

  // Getter for mobile FormArray
  get mobile(): FormArray {
    return this.regForms.get('mobile') as FormArray;
  }

  // Function to create a new mobile number FormControl
  private createMobileControl() {
    return this.fb.control('', [
      Validators.required, 
      Validators.pattern(/^\d{10}$/)
    ]);
  }

  // Add a new mobile number field
  addMobile() {
    this.mobile.push(this.createMobileControl());
  }

  // Remove a mobile number field by index
  removeMobile(index: number) {
  if (this.mobile.length > 1) {
    this.mobile.removeAt(index);
  } else {
    this.mobile.at(index).reset(); // Clear instead of removing
  }
}


  // Submit handler
submitForm() {
  if (this.regForms.valid) {
    console.log('Form Data:', this.regForms.value);
    
    // Reset the form after successful submission
    this.regForms.reset();

    // Ensure at least one mobile number field remains after reset
    this.mobile.clear();
    this.mobile.push(this.createMobileControl());
  } else {
    console.log('Form is invalid');
    this.regForms.markAllAsTouched();  
  }
}



  // Asynic pipe

//   users:any
// constructor(private http:HttpClient){}
//   ngOnInit(): void{
//   //   this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
//   //     (data) => {
//   //       this.users=data
//   //    }
//     //  )
//     this.users=this.http.get("https://jsonplaceholder.typicode.com/posts")
  //  }
  
  // onSubmit(registerForm: any) {
  //     console.log(registerForm)
  //   if (registerForm.valid) {
  //     console.log('Form Submitted Successfully!');
  //     console.log('Form Values:', registerForm.value);
  //     alert('Registration Successful!');
  //     registerForm.reset(); // Reset the form
  //   } else {
  //     console.log('Form is invalid.');
  //   }
  // }

// show(r: any) {
//   // Mark all controls as touched to trigger validation messages
//   Object.keys(r.controls).forEach(key => {
//     r.controls[key].markAsTouched();
//   });
  
//   // Log the form value
//   if (r.valid) {
//     console.log('Form Submitted Successfully:', r.value);
//   } else {
//     console.log('Form Invalid:', r.value);
//   }
// }

  
  // show(r: any) {
  //   // Mark all controls as touched to trigger validation messages
  //   Object.keys(r.controls).forEach((key) => {
  //     r.controls[key].markAsTouched();
  //   });

  //   // Log the form value
  //   if (r.valid) {
  //     console.log('Form Submitted Successfully:', r.value);
  //   } else {
  //     console.log('Form Invalid:', r.value);
  //   }
  // }

  // hasError(controlName: string, error: string, form: any) {
  //   const control = form.controls[controlName];
  //   return control?.touched && control?.errors?.[error];
  // }

  // passwordsMatch(form: any): boolean {
  //   const password = form.controls['password']?.value;
  //   const confirmPassword = form.controls['cpassword']?.value;
  //   return password === confirmPassword;
  // }


  // ngOnChanges &&onInit
  
  // wish="Hello good evening"


  // // ngdocheak
  //  mobile = "";
  // mList = [
  //   "OPPO",
  //   "GOOGLE",
  //   "LENVO",
  //   "IQOO",
  //   "VIVO"
  // ]

  // addMobile() {
  //   // this.mList.push(this.mobile);
  //    this.mList=[...this.mList,this.mobile] //destructure arra cocepts whe click add buuton ochages alos called
  //   this.mobile=""
  // }


 
}