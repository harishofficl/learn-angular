import { Component } from '@angular/core';
import { ParentComponent } from "./parent/parent.component";
import { SizerComponent } from "./sizer/sizer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, SizerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angular';
  fontSize: number = 16;
}
