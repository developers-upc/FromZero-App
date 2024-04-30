import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects: any[] = [
    {
      id: 1,
      title:"Pagina de ajedrez",
      description: "Este entregable consistirá en el código fuente del frontend y backend de la Plataforma de Comercio Electrónico Geekit. Se proporcionará una estructura de directorios organizada, con comentarios claros y limpios en el código para facilitar la comprensión y el mantenimiento futuro.",
      type: "Aplicacion Web",
      stars: [1,2,3,4,5],
      image_url:"/assets/highlight-projects-images/ajedrez.png"
    },
    {
      id: 2,
      title:"Reproduccion de Peliculas",
      description: "Este entregable consistirá en el código fuente del frontend y backend de la Plataforma de Comercio Electrónico Geekit. Se proporcionará una estructura de directorios organizada, con comentarios claros y limpios en el código para facilitar la comprensión y el mantenimiento futuro.",
      type: "Aplicacion Movil",
      stars: [1,2,3,4,5],
      image_url:"/assets/highlight-projects-images/peliculas.png"
    },
    {
      id: 3,
      title:"Proyecto Productividad en Entel",
      description: "Se entregará la Plataforma de Comercio Electrónico Geekit completamente desplegada y funcionando en un entorno de producción. Esto incluirá el hosting del sitio web, la configuración de la base de datos, la implementación de medidas de seguridad y cualquier otro aspecto necesario para que la plataforma esté lista para su lanzamiento y uso por parte de los usuarios finales.",
      type: "Analisis de Datos",
      stars: [1,2,3,4,5],
      image_url:"/assets/highlight-projects-images/entel.png"
    },
    {
      id: 4,
      title:"Copia de Prueba",
      description: "Este entregable consistirá en el código fuente del frontend y backend de la Plataforma de Comercio Electrónico Geekit. Se proporcionará una estructura de directorios organizada, con comentarios claros y limpios en el código para facilitar la comprensión y el mantenimiento futuro.",
      type: "Aplicacion Web",
      stars: [1,2,3],
      image_url:"/assets/highlight-projects-images/ajedrez.png"
    },
  ]

  filteredProjects: any[] = [];

  constructor() {
    this.filteredProjects = this.projects;
  }

  filterProjects(type: string) {
    if (type === "Borrar Filtros") {
      this.filteredProjects = this.projects;
      return;
    }
    this.filteredProjects = this.projects.filter(project => project.type === type);
  }
}
