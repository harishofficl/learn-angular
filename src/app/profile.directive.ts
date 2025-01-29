import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appProfile]',
  standalone: true,
})
export class ProfileDirective implements OnInit {
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.opacity = '0.8';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.opacity = '1';
  }

  ngOnInit(): void {
    this.element.nativeElement.style.width = '200px';
    this.element.nativeElement.style.height = '200px';
    this.element.nativeElement.style.border = '4px solid rgb(37, 159, 240)';
    this.element.nativeElement.style.borderRadius = '200px';
  }
}
