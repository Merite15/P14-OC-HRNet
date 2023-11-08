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
    dateOfBirth: z.coerce.date(),
    startDate: z.coerce.date(),
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
    zipCode: z.number().min(500).max(1000),
    department: z.string().nonempty('Department is required.'),
});