export interface IMessage {
  id:number,
  subject:string,
  emailBody:string,
  recipient:{
    email:string
  },
  sender:{
    email:string,
  },
  sentTime:Date
}
