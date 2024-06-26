import {Component, OnInit} from '@angular/core';
import {DialogAcceptDeliverableComponent} from "../dialog-accept-deliverable/dialog-accept-deliverable.component";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";
import {DeliverablesApiService} from "../../../deliverables/services/deliverables-api.service";
import {IDeliverable} from "../../../deliverables/model/ideliverable";

@Component({
  selector: 'app-deliverable',
  templateUrl: './deliverable.component.html',
  styleUrl: './deliverable.component.css'
})
export class DeliverableComponent implements OnInit{
  deliverableId?: number;
  /*enterprise: any = {
    name: "Geekit.pe",
    projects: {
      id:1,
      name: "Plataforma de Comercio Electronico Geekit",
    }
  }*/
  projectName?:string;
  enterpriseName?:string;
  deliverable!:IDeliverable;
  /*deliverable: any = {
      d_number: 1,
      title:"Documento de Especificacion de Requisitos del Software (SRS)",
      description: "Este entregable consistirá en un documento detallado que describe los requisitos funcionales y no funcionales de la Plataforma de Comercio Electrónico Geekit. Incluirá casos de uso, diagramas de flujo, requisitos de usuario, requisitos de sistema y cualquier otra información relevante para guiar el desarrollo del software.",
      expiration_date:new Date(2024,6,24),
      state:"Finalizado"
  }*/

  constructor(public dialog: MatDialog,private route: ActivatedRoute,private delvsApi:DeliverablesApiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.deliverableId= +params['deliverableId'];
      this.delvsApi.getDeliverableById(this.deliverableId).subscribe(deliverable=>{
        this.deliverable=deliverable;
        this.projectName=this.deliverable?.project?.name;
        this.enterpriseName=this.deliverable?.project?.enterprise?.enterpriseName;
      })
    })
  }

  openDialog() {
    this.dialog.open(DialogAcceptDeliverableComponent,{
      data:{
        deliverableId:Number(this.deliverableId)
      }
    });
  }
}
