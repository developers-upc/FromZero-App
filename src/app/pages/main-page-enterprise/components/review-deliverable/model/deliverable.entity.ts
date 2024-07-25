export class Deliverable {
  d_number:number;
  title:string;
  description:string;
  expiration_date:Date;
  state:string;

  constructor() {
    this.d_number = 0;
    this.title = '';
    this.description = '';
    this.expiration_date = new Date();
    this.state = '';
  }
}
