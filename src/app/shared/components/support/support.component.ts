import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  problems: any[]=["Falta de Información", "Error de carga"]

  protected readonly location = location;
  protected readonly history = history;
}
