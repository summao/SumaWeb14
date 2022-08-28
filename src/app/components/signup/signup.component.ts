import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formGroup = this.fb.group({
    mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(50)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    profileName: ['', [Validators.required, Validators.maxLength(100)]],
    username: ['', [Validators.required, Validators.pattern('^[a-z][a-z_0-9]*'), Validators.maxLength(50)]],
  });

  get mobileNumberForm(): FormControl { return <FormControl>this.formGroup.get('mobileNumber'); }
  get passwordForm(): FormControl { return <FormControl>this.formGroup.get('password'); }
  get profileNameForm(): FormControl { return <FormControl>this.formGroup.get('profileName'); }
  get usernameForm(): FormControl { return <FormControl>this.formGroup.get('username'); }
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  // async signup(): Promise<void> {
  //   this.formGroup.markAllAsTouched();

  //   if (this.formGroup.invalid) {
  //     return;
  //   }
    
  //   await this.accountService.signup(<SignupRequestDto>this.formGroup.value).toPromise();
  //   this.router.navigate(['/','signin'])
  // }

}
