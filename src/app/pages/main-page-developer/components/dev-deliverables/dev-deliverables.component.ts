import {Component, OnInit} from '@angular/core';
import {IDeliverable} from "../../../main-page-enterprise/components/deliverables/model/ideliverable";
//import {FormControl} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {
  DeliverablesApiService
} from "../../../main-page-enterprise/components/deliverables/services/deliverables-api.service";
//import {MatDialog} from "@angular/material/dialog";
/*import {
  DialogAddDeliverableComponent
} from "../../../main-page-enterprise/components/deliverables/components/dialog/dialog-add-deliverable.component";*/

@Component({
  selector: 'app-dev-deliverables',
  templateUrl: './dev-deliverables.component.html',
  styleUrl: './dev-deliverables.component.css'
})
export class DevDeliverablesComponent implements OnInit{
  enterprise?:any;
  projectname?:string;

  deliverables!:IDeliverable[];

  /*deliverableCreated?:any;*/
  projectId?: number;

  /*name=new FormControl('');
  description=new FormControl('');
  exp_date=new FormControl(new Date());*/

  constructor(private route: ActivatedRoute,
              private delvsApi: DeliverablesApiService) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      //Leyendo el projectId que se envió por params
      this.projectId = +params['projectId'];

      this.delvsApi.getAllDeliverablesByProjectId(this.projectId).subscribe(deliverables=>{
        this.deliverables=deliverables;
        if (deliverables.length > 0){
          this.projectname=deliverables[0]?.project?.name;
          this.enterprise=deliverables[0]?.project?.enterprise?.enterpriseName;
        }
      })
    })
  }

  /*openDialog(){
    const count=this.deliverables.length+1;
    const dialogRef=this.dialog.open(DialogAddDeliverableComponent, {
      data:{
        deliverableNumber:count,
        delv_name:this.name,
        delv_description:this.description,
        delv_exp_date:this.exp_date,
      }
    })
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);

      this.deliverableCreated={
        id:count,
        name:result.delv_name.value,
        description:result.delv_description.value,
        date:result.delv_exp_date.value,
        projectId:this.projectId
      }

      //Llamar al servicio para hacer POST
      this.delvsApi.postDeliverable(this.deliverableCreated).subscribe(response=>{
        console.log(response)
      })

    })
  }*/

  goToReviewDelv(deliverableId:number){
    return ['/app-developer','main',this.projectId,'deliverables',deliverableId]
  }
}
