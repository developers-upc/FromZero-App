//Interface de autentificacion del usuario
export interface IAccount {
  username: string,
  password: string,
  email: string,
  accountType: accountType,
}

enum accountType {
  Enterprise,
  Developer
}

//Interface perfil de usuario una vez ingresado a la aplicacion
export interface IProfile{
  username: string,
  email: string,
  imageProfile: string,
  accountType: accountType,
  summary: string,
  country: string,
  cellphone: string,
  completedProjects?: number,
  specialties?: string,
  socialRazon?: string,
  website?: string,
  sector?: string,
  projects?: IProject[]
}

//Interface de proyectos
export interface IProject {
  id: number,
  title: string,
  description: string,
  urlImage?: string,
  urlPage?: string,
  deliverables?: IDeliverable[],
  candidates?: ICandidate[],
  status?: statusProject,
  dateCreated?: Date,
  dateFinished?: Date,
  enterprise?: IProfile,
  developer?: IProfile,
}

enum statusProject {
  InProgress,
  Finished,
  PendingOfDeveloper,
  Canceled
}

//Interface de entregables
export interface IDeliverable {
  id: number,
  title: string,
  description: string,
  deathLine: Date,
  status: statusDeliverable,
  project: IProject
}
enum statusDeliverable {
  Pending,
  Delivered,
  Reviewed,
  Canceled
}

//Interface de candidatos
export interface ICandidate {
  id: number,
  candidateName: string,
  candidateDescription: string,
  candidateImage: string,
  candidateLinkProfile: string,
  project: IProject,
  isAccepted: boolean
}
