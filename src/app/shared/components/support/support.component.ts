import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent implements OnInit {
  problems: any[] = ["Falta de Información", "Error de carga"]
  supportForm: FormGroup;
  protected readonly history = history;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
  this.supportForm = this.formBuilder.group({
    title: ['', Validators.required],
    problemType: ['', Validators.required],
    mensaje: ['', Validators.required]
  });
}
  ngOnInit(): void {
    this.supportForm = this.formBuilder.group({
      title: ['', Validators.required],
      problemType: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.supportForm.valid) {
      this.http.post('your-endpoint-url', this.supportForm.value).subscribe(
        response => {
          console.log(response);
          // handle your response here
        },
        error => {
          console.error(error);
          // handle your error here
        }
      );
    }
  }
}
