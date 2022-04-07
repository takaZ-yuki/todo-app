import { UserType } from "./userType";

export interface TaskType {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  assigner: UserType;
  expireDate: string;
  created: string;
}