import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  standalone: true,
  imports: [],
  templateUrl: './sizer.component.html',
  styleUrl: './sizer.component.css'
})
export class SizerComponent {
  @Input() size: number = 0;

  @Output() sizeChange = new EventEmitter<number>();

  dec() {
    this.resize(-2);
  }
  inc() {
    this.resize(2);
  }

  resize(value: number) {
    this.size += value;
    this.sizeChange.emit(this.size);
  }
}
