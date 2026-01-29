import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // uname = new FormControl();
  // password = new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(6),
  //     ])

  registerForm: FormGroup;

  countries = ['india', 'australia', 'singapore', 'geneva'];

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        RegisterComponent.exclamationValidator,
      ]),
      country: new FormControl(''),
      hobbies: this.fb.array([]),
    });
  }

  get username() {
    return this.registerForm.get('username') as FormControl;
  }

  get password() {
    return this.registerForm.get('password') as FormControl;
  }

  get hobbies() {
    return this.registerForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    this.hobbies.push(
      this.fb.group({
        name: new FormControl(),
        freq: new FormControl(),
      }),
    );
  }

  onRemove(i: number) {
    this.hobbies.removeAt(i);
  }

  onSubmit() {
    debugger;
    console.log(this.registerForm);
  }

  // Custom Validator
  static exclamationValidator(
    control: AbstractControl,
  ): null | ValidationErrors {
    const hasExclamation = control.value.indexOf('!') >= 0;
    return hasExclamation ? null : { exclamation: true };
  }
}
