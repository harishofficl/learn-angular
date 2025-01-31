import { Component } from '@angular/core';
import { SizerComponent } from './sizer/sizer.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './highlight.directive';
import { CustomServiceService } from './custom-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileDirective } from './profile.directive';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { FormsComponent } from "./forms/forms.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ParentComponent,
    SizerComponent,
    DirectivesComponent,
    HighlightDirective,
    CommonModule,
    FormsModule,
    ProfileDirective,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FirstComponent,
    SecondComponent,
    FormsComponent
],
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
