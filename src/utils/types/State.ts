import { Employee } from "./Employee";
import { StatusState } from "./StatusState";

export interface State {
    employees: Employee[],
    status: StatusState
}