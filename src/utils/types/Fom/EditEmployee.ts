import { Employee } from "../Employee";

export interface EditEmployee {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setEmployeeEdited: React.Dispatch<React.SetStateAction<string>>;
    employee?: Employee
}