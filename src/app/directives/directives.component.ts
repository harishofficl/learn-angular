import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  isBold: boolean = true;
  isItalic: boolean = true;

  bgColor: string = '#FF946D';
  size: number = 20;

  userName: string = '';

  isData(): boolean {
    const val: boolean = true;
    return val;
  }
}
