import { z } from 'zod';

export const ValidationSchema = z.object({
    first_name: z
        .string()
        .nonempty('First name is required.')
        .min(3, { message: 'Minimum 3 characters' })
        .max(30, { message: 'Maximum 30 characters' }),
    last_name: z
        .string()
        .nonempty('Last name is required.')
        .min(3, { message: 'Minimum 3 characters' })
        .max(30, { message: 'Maximum 30 characters' }),
    dateOfBirth: z.coerce.date().refine((value) => {
        const birthDate = new Date(value);
        const currentDate = new Date();
        const minDate = new Date();
        const maxDate = new Date();

        minDate.setFullYear(currentDate.getFullYear() - 60);

        maxDate.setFullYear(currentDate.getFullYear() - 20);

        return birthDate >= minDate && birthDate <= maxDate;
    }, {
        message: "Date of birth must be between 60 and 20 years ago",
    }),
    startDate: z
        .coerce
        .date()
        .refine((value) => {
            const startDate = new Date(value);
            const currentDate = new Date();

            const minDate = new Date();
            minDate.setFullYear(currentDate.getFullYear() - 60);

            return startDate <= currentDate && startDate >= minDate;
        }, {
            message: "Start date must be a minimum of 60 years ago and not exceed today's date..",
        }),
    address: z
        .string()
        .nonempty('Street name is required.')
        .min(3, { message: 'Minimum 3 characters' })
        .max(30, { message: 'Maximum 30 characters' }),
    city: z
        .string()
        .nonempty('City name is required.')
        .min(3, { message: 'Minimum 3 characters' })
        .max(30, { message: 'Maximum 30 characters' }),
    state: z.string().nonempty('State name is required.'),
    zipCode: z.coerce.number().min(500).max(1000),
    department: z.string().nonempty('Department is required.'),
});