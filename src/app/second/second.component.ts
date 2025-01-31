import { Component } from '@angular/core';
import { RxjsService } from '../rxjs.service';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {

  displayValue!: number;
  constructor(private rxjsService: RxjsService) {}

  ngOnInit() {
    this.rxjsService.myObservable.subscribe((value) => {
      this.displayValue = value;
      console.log(`Second : ${value}`);
    });
  }
}
