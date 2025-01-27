import { Component } from '@angular/core';
import { SizerComponent } from './sizer/sizer.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './highlight.directive';
import { CustomServiceService } from './custom-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SizerComponent, DirectivesComponent, HighlightDirective, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learn-angular';
  fontSize: number = 16;

  studentMarks: number[] = [];

  newMark: number = 0;

  constructor(private myService: CustomServiceService) {
    this.studentMarks = myService.getMarks();
  }

  addMark() {
    this.myService.addMark(this.newMark);
    this.newMark = 0;
  }
}
