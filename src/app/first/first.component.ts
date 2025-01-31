import { Component } from '@angular/core';
import { RxjsService } from '../rxjs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {

  subscribedData!: Subscription;

  displayValue!: number;

  constructor(private rxjsService: RxjsService) {}

  ngOnInit() {
    this.subscribedData = this.rxjsService.myObservable.subscribe((value) => {
      this.displayValue = value;
      console.log(`first : ${value}`);
    });

    const intervalId = setInterval(() => {
      this.rxjsService.updateValue(Math.floor(Math.random() * 10));
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);

    setTimeout(() => {
      this.subscribedData.unsubscribe();
    }, 5000);
  }
}
