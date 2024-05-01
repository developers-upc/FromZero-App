import { Component } from '@angular/core';
import {ICandidate, IEnterpriseProfile, IProject} from "../../models/enterprise-profile.model";
import {MatDialog} from "@angular/material/dialog";
import {CandidatesProjectDialogComponent} from "../candidates-project-dialog/candidates-project-dialog.component";

@Component({
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrl: './home-projects.component.css'
})
export class HomeProjectsComponent {
  constructor(public dialog: MatDialog) { }

  openDialog(project: IProject) {
    this.dialog.open(CandidatesProjectDialogComponent, {
      data: {
        candidates: project.candidates
      }
    });
  }
  emptyProjects = new Array(5);
  perfilUsuario: IEnterpriseProfile = {
    id: 1,
    accountType: 1,
    username: 'Geekit',
    summary: 'Geekit es tu destino para la moda geek. Nos especializamos en ofrecer una selección única de ropa y accesorios para jóvenes apasionados por la cultura pop, los videojuegos, el cine y los cómics. En Geekit, encontrarás prendas que te permiten expresar tu estilo auténtico y tu amor por tus intereses favoritos.',
    country: 'Peru',
    socialRazon: '20405979381',
    cellphone: '+55 11 99999-9999',
    email: 'kukuku@upc.pe',
    website: 'https://fromzero.com',
    imageProfile: 'https://geekitpe.com/wp-content/uploads/2022/11/152x152.jpg',
    sector: 'Technology',
    projects: [
      {
        name: 'Plataforma de Comercio Electronico Geekit',
        state: 'En proceso',
        progress: 50,
        candidates: [],
      },
      {
        name: 'Plataforma de E-Learning Geekit',
        state: 'En proceso',
        progress: 30,
        candidates: [],
      },
      {
        name: 'Landing page Geekit',
        state: 'En busqueda',
        numCandidates: 3,
        candidates: [
          {
            name: 'Ximena Hernandez',
            description: 'Soy una desarrolladora web con más de 5 años de experiencia en la creación de sitios web y aplicaciones móviles. Apasionado por la tecnología y el diseño, se especializa en el desarrollo frontend y backend, utilizando tecnologías como HTML, CSS, JavaScript, React y Node.js.',
            image: 'https://lapi.com.mx/web/image/product.template/5138/image_1024?unique=f67111b',
            state: 'on-hold',
            link: 'https://github.com/Purak189',
          },
          {
            name: "Juan Pérez",
            description: "Soy un desarrollador web y móvil con experiencia en la creación de aplicaciones modernas y atractivas. Me especializo en el desarrollo frontend utilizando tecnologías como HTML, CSS, JavaScript, React y Angular. También tengo experiencia en el desarrollo backend con Node.js y MongoDB.",
            image: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
            state: "on-hold",
            link: "https://github.com/juanperez"
          },
          {
            name: "María López",
            description: "Desarrolladora web con una pasión por crear experiencias digitales sorprendentes. Tengo experiencia en el desarrollo frontend con HTML, CSS, JavaScript y React, así como en el desarrollo backend con Node.js y Express. Me encanta trabajar en proyectos desafiantes que me permitan mejorar mis habilidades y aprender nuevas tecnologías.",
            image: "https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png",
            state: "on-hold",
            link: "https://github.com/marialopez"
          },
          {
            name: "Juan Pérez",
            description: "Soy un desarrollador web y móvil con experiencia en la creación de aplicaciones modernas y atractivas. Me especializo en el desarrollo frontend utilizando tecnologías como HTML, CSS, JavaScript, React y Angular. También tengo experiencia en el desarrollo backend con Node.js y MongoDB.",
            image: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
            state: "on-hold",
            link: "https://github.com/juanperez"
          },
          {
            name: "María López",
            description: "Desarrolladora web con una pasión por crear experiencias digitales sorprendentes. Tengo experiencia en el desarrollo frontend con HTML, CSS, JavaScript y React, así como en el desarrollo backend con Node.js y Express. Me encanta trabajar en proyectos desafiantes que me permitan mejorar mis habilidades y aprender nuevas tecnologías.",
            image: "https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png",
            state: "on-hold",
            link: "https://github.com/marialopez"
          }
        ],
      }
    ]
  }
}
