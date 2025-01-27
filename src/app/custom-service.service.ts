import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomServiceService {
  private marks: number[] = [];
  getMarks(): number[] {
    return this.marks;
  }
  addMark(newMark: number): string {
    this.marks.push(newMark);
    return `mark: ${newMark} has been added to marks`;
  }
}
