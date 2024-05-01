import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-form-create-project',
  templateUrl: './form-create-project.component.html',
  styleUrl: './form-create-project.component.css'
})
export class FormCreateProjectComponent implements OnInit{
  form: FormGroup;
  hide = new FormControl(false);
  selectedLanguages:string[] = [];
  selectedFrameworks:string[] = [];
  selectedFiles: File[] = [];
  removeSelection(index:number, list: string[]){
    list.splice(index, 1);
  }
  onFilesSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length > 0) {
      this.selectedFiles = Array.from(target.files);
      console.log(this.selectedFiles);
    }
  }
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      projectType: ['', Validators.required],
      programmLenguageType: ['', this.languageFrameworkValidator.bind(this)],
      programFrameworksType: ['', this.languageFrameworkValidator.bind(this)],
      presupuesto: ['', Validators.required],
      procesos: ['', this.processValidator.bind(this)]
    });

    this.hide.valueChanges.subscribe((checked: boolean | null) => {
      const programmLenguageTypeControl = this.form.get('programmLenguageType');
      const programFrameworksTypeControl = this.form.get('programFrameworksType');

      if (programmLenguageTypeControl) {
        programmLenguageTypeControl.updateValueAndValidity();
      }

      if (programFrameworksTypeControl) {
        programFrameworksTypeControl.updateValueAndValidity();
      }
    });
  }
  ngOnInit() {

  }
  languageFrameworkValidator(control: FormControl): { [s: string]: boolean} | null  {
    if (!this.hide.value && (this.selectedLanguages.length === 0 || this.selectedFrameworks.length === 0)) {
      return {'languageFrameworkRequired': true};
    }
    return null;
  }

  processValidator(control: FormControl): { [s: string]: boolean } | null {
    if (!this.hide.value && control.value === '') {
      return {'processRequired': true};
    }
    return null;
  }


  onSubmit() {
    if (this.form.valid) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '400px',
        data: {message: '¿Estás seguro de que quieres publicar el proyecto?'}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Aquí va el código para publicar el proyecto
          console.log(this.form.value);
        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }

}
