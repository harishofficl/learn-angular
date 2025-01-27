import { Component } from '@angular/core';
import { ParentComponent } from "./parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn-angular';
}
