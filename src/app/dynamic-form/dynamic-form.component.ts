import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormField {
  type: string;
  name: string;
  label: string;
  validations?: string[];
}

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.component.html',
  styles: [],
  standalone: true,
})
export class DynamicFormComponent {
  fields: FormField[] = [
    {
      type: 'text',
      name: 'name',
      label: 'Name',
      validations: ['required'],
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      validations: ['required', 'email'],
    },
    // Add more fields as needed
  ];

  // ! operator indicate that the form property will be initialized before it is accessed in the ngOnInit method
  form!: FormGroup;

  ngOnInit() {
    const formGroup: any = {}; // Explicitly typing formGroup as 'any'
    for (const field of this.fields) {
      const fieldControl = new FormControl(
        '',
        this.getValidators(field.validations)
      );
      formGroup[field.name] = fieldControl;
    }
    this.form = new FormGroup(formGroup);
  }

  private getValidators(validations: string[] = []) {
    const validators = [];
    if (validations.includes('required')) {
      validators.push(Validators.required);
    }
    if (validations.includes('email')) {
      validators.push(Validators.email);
    }
    // Add more validators as needed
    return validators;
  }

  onSubmit() {
    if (this.form.valid) {
      // Perform the necessary actions with the form data
      console.log(this.form.value);
    } else {
      // Display error messages or handle invalid form submission
    }
  }
}