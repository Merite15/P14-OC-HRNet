import * as yup from 'yup';
import { minMaxDate } from '@/utils/DateFunctions';

export const validationSchema = yup.object({
    first_name: yup
        .string()
        .required('first name is required')
        .matches(
            /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            'invalid name format: hover ? for more details'
        ),
    last_name: yup
        .string()
        .required('last name is required')
        .matches(
            /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
            'invalid name format: hover ? for more details'
        ),
    dateOfBirth: yup
        .date()
        .required('birthday is required')
        .typeError('a valid date is required')
        .max(minMaxDate(18, 'substract'), 'you must be at least 18')
        .min(minMaxDate(67, 'substract'), 'you must not be older than 67'),
    startDate: yup
        .date()
        .required('a valid date is required')
        .typeError('a valid date is required')
        .min(minMaxDate(67 - 18, 'substract'))
        .max(new Date().toDateString(), 'you cannot select a date in the future'),
    department: yup.string().required('department is required'),
    address: yup.string().required('street is required'),
    city: yup.string().required('city is required'),
    state: yup.string().required('state is required'),
    zipCode: yup
        .number()
        .required('zip code is required')
        .min(501, 'zip code must be between 501 and 99950')
        .max(99950, 'zip code must be between 501 and 99950')
        .typeError('zip code must be between 501 and 99950'),
});