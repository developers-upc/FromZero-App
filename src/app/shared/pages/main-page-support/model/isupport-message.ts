export interface ISender {
  userId: number;
  email: string;
  password: string;
  userType: string;
}

export interface ISupportMessage {
  id: number;
  title: string;
  type: string;
  description: string;
  sender: ISender;
  creationDate: string;
}
