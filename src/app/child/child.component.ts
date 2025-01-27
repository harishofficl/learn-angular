import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 @Input() ageParent: number = 0;


 @Output() gradeEvent: EventEmitter<string> = new EventEmitter<string>();

 ngOnInit() {
   this.gradeEvent.emit("hi");
 }
}
