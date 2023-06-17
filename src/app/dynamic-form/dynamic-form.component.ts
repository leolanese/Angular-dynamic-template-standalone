import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormField {
  type: string;
  name: string;
  label: string;
  validations?: string[];
}

@Component({
  selector: 'app-dynamic-form',
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule],
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
      validations: ['required', 'minLength3'],
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      validations: ['required', 'email'],
    },
    // Add more fields as needed
  ];

  // Declare a form variable of type FormGroup to hold the reactive form
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  // OnInit lifecycle hook
  ngOnInit() {
    // initialise the formGroup 
    this.formGroup = this.formBuilder.group({});

    // call to create form controls for each field and add them to the form group
    this.setupFormControls();
  }

  private setupFormControls() {
    for (const field of this.fields) {
      this.formGroup.addControl(
        field.name,
        this.formBuilder.control('', this.getValidators(field.validations))
      );
    }
  }

  private getValidators(validations: string[] = []) {
    const validators = [];

    if (validations.includes('required')) {
      validators.push(Validators.required);
    }
    if (validations.includes('email')) {
      validators.push(Validators.email);
    }
    if (validations.includes('minLength3')) {
      validators.push(Validators.minLength(3));
    }
    
    return validators;
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    } else {
      // Handle invalid form submission
    }
  }
}