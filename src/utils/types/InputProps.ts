import { UseFormRegister } from 'react-hook-form';

export interface InputProps {
    register: UseFormRegister<{
        first_name: string,
        last_name: string;
        dateOfBirth: Date;
        startDate: Date;
        department: string;
        address: string;
        city: string;
        state: string;
        zipCode: number;
    }>;
    errors?: string;
}