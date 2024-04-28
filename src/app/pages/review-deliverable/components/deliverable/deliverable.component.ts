import { Component } from '@angular/core';

@Component({
  selector: 'app-deliverable',
  templateUrl: './deliverable.component.html',
  styleUrl: './deliverable.component.css'
})
export class DeliverableComponent {
  projectId?: number;
  enterprise: any = {
    name: "Geekit.pe",
    projects: {
      id:1,
      name: "Plataforma de Comercio Electronico Geekit",
    }
  }

  deliverable: any = {
      d_number: 1,
      title:"Documento de Especificacion de Requisitos del Software (SRS)",
      description: "Este entregable consistirá en un documento detallado que describe los requisitos funcionales y no funcionales de la Plataforma de Comercio Electrónico Geekit. Incluirá casos de uso, diagramas de flujo, requisitos de usuario, requisitos de sistema y cualquier otra información relevante para guiar el desarrollo del software.",
      expiration_date:new Date(2024,6,24),
      state:"Finalizado"
    }

}
