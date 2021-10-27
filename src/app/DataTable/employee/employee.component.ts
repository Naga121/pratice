import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpDataService } from 'src/app/Service/emp-data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  departments = [
    { id: 1, value: 'Dept-1' },
    { id: 2, value: 'Dept-2' },
    { id: 3, value: 'Dept-3' }
  ]

  form: FormGroup;

  constructor(public es: EmpDataService, private fb: FormBuilder) {

    this.form = this.fb.group({
      $key: [null],
      name: ['', Validators.required],
      email: ['', Validators.email],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      gender: ['1'],
      city: [''],
      dept: [0],
      isPerment: [false]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    var data = {
      ...this.form.value,

    }
    this.es.postData(data).subscribe(
      () => {
        alert('Employee Data is posted')
      }
    )
  }

  onClear() {
    this.form.reset();
  }
}
