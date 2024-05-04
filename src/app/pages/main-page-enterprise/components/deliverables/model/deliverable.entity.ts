export class Deliverable {
  d_number:number;
  title:string;
  description:string;
  expiration_date:Date;
  state:string;

  constructor(d_number: number,title:string, description: string, expiration_date: Date, state: string) {
    this.d_number = d_number;
    this.title = title;
    this.description = description;
    this.expiration_date = expiration_date;
    this.state = state;
  }
}
