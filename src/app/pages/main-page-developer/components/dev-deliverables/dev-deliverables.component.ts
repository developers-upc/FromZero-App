import {Component, OnInit} from '@angular/core';
import {IDeliverable} from "../../../main-page-enterprise/components/deliverables/model/ideliverable";
import {ActivatedRoute} from "@angular/router";
import {
  DeliverablesApiService
} from "../../../main-page-enterprise/components/deliverables/services/deliverables-api.service";

@Component({
  selector: 'app-dev-deliverables',
  templateUrl: './dev-deliverables.component.html',
  styleUrl: './dev-deliverables.component.css'
})
export class DevDeliverablesComponent implements OnInit{
  enterprise?:any;
  projectname?:string;

  deliverables!:IDeliverable[];

  projectId?: number;

  constructor(private route: ActivatedRoute,
              private delvsApi: DeliverablesApiService) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.projectId = +params['projectId'];

      this.delvsApi.getAllDeliverablesByProjectId(this.projectId).subscribe(deliverables=>{
        this.deliverables=deliverables;
        if (deliverables.length > 0){
          this.projectname=deliverables[0]?.project?.name;
          this.enterprise=deliverables[0]?.project?.company?.companyName;
        }
      })
    })
  }

  goToReviewDelv(deliverableId:number){
    return ['/app-developer','main',this.projectId,'deliverables',deliverableId]
  }
}
