import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-create-project',
  templateUrl: './form-create-project.component.html',
  styleUrl: './form-create-project.component.css'
})
export class FormCreateProjectComponent implements OnInit{
  form: FormGroup;
  hide = new FormControl(false);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [''],
      description: [''],
      projectType: [''],
      programmLenguageType: [''],
      programFrameworksType: [''],
    });
  }
  ngOnInit() {

  }

  onSubmit() {
    console.log(this.form.value);
  }

}
