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
      stars: 5
    },
    {
      id: 2,
      title:"Reproduccion de Peliculas",
      description: "Este entregable consistirá en el código fuente del frontend y backend de la Plataforma de Comercio Electrónico Geekit. Se proporcionará una estructura de directorios organizada, con comentarios claros y limpios en el código para facilitar la comprensión y el mantenimiento futuro.",
      type: "Aplicacion Movil",
      stars: 5
    },
    {
      id: 3,
      title:"Proyecto Productividad en Entel",
      description: "Se entregará la Plataforma de Comercio Electrónico Geekit completamente desplegada y funcionando en un entorno de producción. Esto incluirá el hosting del sitio web, la configuración de la base de datos, la implementación de medidas de seguridad y cualquier otro aspecto necesario para que la plataforma esté lista para su lanzamiento y uso por parte de los usuarios finales.",
      type: "Data Analytics",
      stars: 5
    }
  ]
}
