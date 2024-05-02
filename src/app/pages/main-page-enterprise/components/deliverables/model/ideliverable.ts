import {StatusDeliverable} from "./status-deliverable";
export interface IDeliverable {
  id: number,
  title: string,
  description: string,
  deadLine: Date,
  status: StatusDeliverable
}
