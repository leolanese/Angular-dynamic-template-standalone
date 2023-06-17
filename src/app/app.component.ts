import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, DynamicFormComponent],
})
export class AppComponent {
  title = 'AppProject';
}