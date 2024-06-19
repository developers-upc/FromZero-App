import {StatusDeliverable} from "./status-deliverable";
export interface IdeliverableTemp {
  id: number,
  title: string,
  description: string,
  deadLine: Date,
  status: StatusDeliverable
}
