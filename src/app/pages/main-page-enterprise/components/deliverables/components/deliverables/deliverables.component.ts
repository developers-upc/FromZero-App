import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DeliverablesApiService} from "../../services/deliverables-api.service";
import {Deliverable} from "../../model/deliverable.entity";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddDeliverableComponent} from "../dialog/dialog-add-deliverable.component";
import {FormControl} from "@angular/forms";
import {IDeliverable} from "../../model/ideliverable";
import {StatusDeliverable} from "../../model/status-deliverable";
import {AuthApiService} from "../../../../../auth/services/auth-api.service";
import {IEnterpriseProfile} from "../../../home/models/enterprise-profile.model";

@Component({
  selector: 'app-deliverables',
  templateUrl: './deliverables.component.html',
  styleUrl: './deliverables.component.css'
})
export class DeliverablesComponent implements OnInit {

  enterprise!: IEnterpriseProfile;
  projectname="";

  deliverables!:IDeliverable[];

  deliverableCreated?:IDeliverable;
  projectId?: number;
  title=new FormControl('');
  description=new FormControl('');
  exp_date=new FormControl(new Date());
  state:StatusDeliverable=0;

  constructor(private route: ActivatedRoute,
              private delvsApi: DeliverablesApiService,
              public dialog:MatDialog,
              private authservice:AuthApiService) {
  }

  getProjectId(){
    return this.projectId??0;
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      //Leyendo el projectId que se envió por params
      this.projectId = params['projectId'];
      console.log(this.projectId);

      //llamado a la API para obtener todos los entregables
      const userId = localStorage.getItem('userId');
      const userIdNumber=userId?+userId:null;
      this.delvsApi.getAllDeliverables(userIdNumber).subscribe({
        next: (result:any) => {
          //const index:number=this.projectId??0;
          const index:number=this.getProjectId();

          //obteniendo datos de perfil de usuario
          const newUserIdNumber:number=userIdNumber??0;
          this.authservice.getProfileById(newUserIdNumber).subscribe(profile=>{
            this.enterprise=profile;
            console.log(this.enterprise)
            this.projectname=this.enterprise.projects[index-1].name
          })

          this.deliverables=result.projects[index-1].deliverables;
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

      this.deliverableCreated={
        id:count,
        title:result.delv_title.value,
        description:result.delv_description.value,
        deadLine:result.delv_exp_date.value,
        status:this.state
      }

      //Llamar al servicio para hacer POST
      this.delvsApi.postDeliverable(this.deliverableCreated,this.projectId);

      // Simulacion
      this.deliverables.push(this.deliverableCreated);
    })
  }

  getEnumName(value:number){
    return StatusDeliverable[value];
  }

  goToReviewDelv(deliverableId:number){
    return ['/app','main',this.getProjectId(),'deliverables',deliverableId]
  }
}
