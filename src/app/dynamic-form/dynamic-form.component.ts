import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import formConfig from './../../assets/form-config.json';

interface FormField {
  type: string;
  name: string;
  validations?: string[];
  errorMessage: string;
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
  fields!: FormField[];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.fields = formConfig.fields;

    this.formGroup = this.formBuilder.group({});

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