import {Component, OnInit} from '@angular/core';
import {
  HighlightsProjectServiceService
} from "../../services/highlights-project-service/highlights-project-service.service";
import {IHighlightProject} from "../../model/ihighlight-project";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{
  projects!: IHighlightProject[] ;

  filteredProjects: any[] = [];

  constructor(private _highlightProjectService: HighlightsProjectServiceService) {
  }

  filterProjects(type: string) {
    if (type === "Borrar Filtros") {
      this.filteredProjects = this.projects;
      return;
    }
    this.filteredProjects = this.projects.filter(project => project.type === type);
  }

  ngOnInit(): void {
    this._highlightProjectService.getAll().subscribe((projects: IHighlightProject[]) => {
      this.projects = projects;
      this.filteredProjects = this.projects;
    });
  }
}
