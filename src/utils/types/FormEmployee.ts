import { Employee } from "./Employee";

export interface FormEmployee {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setEmployeeEdited?: React.Dispatch<React.SetStateAction<string>>;
    setEmployeeCreated: React.Dispatch<React.SetStateAction<string>>;
    employee?: Employee
}
