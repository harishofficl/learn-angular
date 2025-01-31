import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() ageParent: number;

 
  constructor() {
    this.ageParent = 0;
  }
 /*
  ngOnChanges() {
    // @Input-bound inputs
    console.log('ngOnChanges');
  }

  ngOnInit() {
    // triggered upon the completion of initializing data-bound or input properties of a component.
    console.log('ngOnInit');
  }

  ngDoCheck() {
    // ngDoCheck() is called immediately after ngOnChanges().
    console.log('ngDoCheck-child');
  }

  ngAfterContentInit() {
    // Following the first ngDoCheck, the ngAfterContentInit() hook is executed
    // triggered when the component or directive content has been initialized.
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    // ngAfterContentChecked is called following ngAfterContentInit() and each subsequent ngDoCheck()
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    // The ngAfterViewInit hook is executed after ngAfterContentChecked().
    // The view is always loaded immediately after the content.
    // So, it gets triggered after Angular initializes the views and child views of the component
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    // The ngAfterViewChecked hook is called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
    // It is triggered after Angular has examined the component’s and child’s views or the view that holds the directive
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    // destroy the component
    console.log("ngOnDestroy");
  }
  */
}
