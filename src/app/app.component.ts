import { Component } from '@angular/core';
import { SizerComponent } from './sizer/sizer.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SizerComponent, DirectivesComponent, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learn-angular';
  fontSize: number = 16;
}
