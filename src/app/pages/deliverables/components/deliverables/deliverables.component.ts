import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DeliverablesApiService} from "../../services/deliverables-api.service";
import {Deliverable} from "../../model/deliverable.entity";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddDeliverableComponent} from "../dialog/dialog-add-deliverable.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-deliverables',
  templateUrl: './deliverables.component.html',
  styleUrl: './deliverables.component.css'
})
export class DeliverablesComponent implements OnInit {
  projectId?: number;
  //Usar model de /core
  enterprise: any = {
    name: "Geekit.pe",
    projects: {
      id:1,
      name: "Plataforma de Comercio Elctronico Geekit",
    }
  }

  deliverables: Deliverable[] = [
    {
      d_number: 1,
      title:"Documento de Especificacion de Requisitos del Software (SRS)",
      description: "Este entregable consistirá en un documento detallado que describe los requisitos funcionales y no funcionales de la Plataforma de Comercio Electrónico Geekit. Incluirá casos de uso, diagramas de flujo, requisitos de usuario, requisitos de sistema y cualquier otra información relevante para guiar el desarrollo del software.",
      expiration_date:new Date(2024,6,24),
      state:"Finalizado"
    },
    {
      d_number: 2,
      title:"Prototipo Interactivo de la interfaz de usuario (UI)",
      description: "Este entregable consistirá en un documento detallado que describe los requisitos funcionales y no funcionales de la Plataforma de Comercio Electrónico Geekit. Incluirá casos de uso, diagramas de flujo, requisitos de usuario, requisitos de sistema y cualquier otra información relevante para guiar el desarrollo del software.",
      expiration_date:new Date(2024,7,24),
      state:"En espera de revision"
    },
    {
      d_number: 3,
      title:"Codigo fuente delk frontend y backend",
      description: "Este entregable consistirá en un documento detallado que describe los requisitos funcionales y no funcionales de la Plataforma de Comercio Electrónico Geekit. Incluirá casos de uso, diagramas de flujo, requisitos de usuario, requisitos de sistema y cualquier otra información relevante para guiar el desarrollo del software.",
      expiration_date:new Date(2024,8,24),
      state:"En espera de revision"
    }
  ];

  deliverableCreated?:Deliverable;
  title=new FormControl('');
  description=new FormControl('');
  exp_date=new FormControl(new Date());
  state:string="pendiente";

  constructor(private route: ActivatedRoute,
              private delvsApi: DeliverablesApiService,
              public dialog:MatDialog) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.projectId = params['projectId'];
      console.log(this.projectId);
      this.delvsApi.getAllDeliverables(this.projectId).subscribe({
        next: (result:any) => {
          this.deliverables=result;
        },
        error: (err:any) => {
          console.log(err);
        }
      })
    })
  }

  openDialog(){
    const count=this.deliverables.length+1;
    const dialogRef=this.dialog.open(DialogAddDeliverableComponent, {
      data:{
        deliverableNumber:count,
        delv_title:this.title,
        delv_description:this.description,
        delv_exp_date:this.exp_date,
      }
    })
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
      this.deliverableCreated=new Deliverable(count,result.delv_title.value,
        result.delv_description.value, result.delv_exp_date.value,this.state)
      //Llamar al servicio para hacer POST
      this.delvsApi.postDeliverable(this.deliverableCreated,this.projectId);

      // Simulacion
      this.deliverables.push(this.deliverableCreated);
    })
  }

}
