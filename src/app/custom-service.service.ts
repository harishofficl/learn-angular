import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomServiceService {
  private marks: number[];

  constructor() {
    this.marks = [];
  }

  async getStudents(): Promise<[]> {
    const students: Response = await fetch(
      'https://6798695ebe2191d708af901f.mockapi.io/studentMarks'
    );
    const studentsJson: [] = await students.json();
    console.log(studentsJson);
    return studentsJson;
  }

  getMarks() {
    return this.marks;
  }
  addMark(newMark: number) {
    this.marks.push(newMark);
    console.log(`mark: ${newMark} has been added to marks`);
  }
}