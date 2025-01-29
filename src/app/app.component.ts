import { Component } from '@angular/core';
import { SizerComponent } from './sizer/sizer.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './highlight.directive';
import { CustomServiceService } from './custom-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileDirective } from './profile.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SizerComponent, DirectivesComponent, HighlightDirective, CommonModule, FormsModule, ProfileDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learn-angular';
  fontSize: number = 16;
  newMark: number = 0;
  studentMarks: number[];
  students: Student[];

  constructor(private myService: CustomServiceService) {
    this.studentMarks = myService.getMarks();
    this.students = [];
    this.getStudentsService();
  }

  async getStudentsService() {
    this.students = await this.myService.getStudents();
  }

  addMark() {
    this.myService.addMark(this.newMark);
    this.newMark = 0;
  }
}

interface Student {
  name: string;
  age: number;
}

