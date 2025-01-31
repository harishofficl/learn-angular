import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {

  name = new FormControl('');

  formGroup: FormGroup = new FormGroup({
    inputName: new FormControl(''),   
    inputAge: new FormControl(''),
    inputNumber: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  ngOnInit() {
    this.name.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((value) => {
        console.log(value);
      });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

  updateProfile() {
    this.formGroup.patchValue({
      inputName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
    this.onSubmit();
  }
}
