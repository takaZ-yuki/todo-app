import { UserType } from "./userType";

export interface TodoType {
  id: number;
  title: string;
  description: string;
  tags: Array<string>;
  status: string;
  startDate: string;
  expireDate: string;
  created: string;
}