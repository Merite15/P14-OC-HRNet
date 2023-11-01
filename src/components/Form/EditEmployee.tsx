import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { States } from '@/utils/States';
import { yupResolver } from '@hookform/resolvers/yup';
import { convertLocalDateInUTC, dateParser } from '@/utils/DateFunctions';
import { useDispatch } from 'react-redux';
import { editUser } from '@/store/users';
import { setIsSuccessful } from '@/store/formStatus';
import { InputFirstName } from '../Custom/Input/FirstName';
import { InputLastName } from '../Custom/Input/LastName';
import { InputBirthDay } from '../Custom/Input/BirthDay';
import { InputDate } from '../Custom/Input/Date';
import { InputAddress } from '../Custom/Input/Address';
import { InputCity } from '../Custom/Input/City';
import { InputZipCode } from '../Custom/Input/ZipCode';
import { SelectDepartment } from '../Custom/Select/Department';
import { Error } from '../Utils/Error';
import { SelectState } from '../Custom/Select/State';
import { validationSchema } from '../../utils/ValidationSchema';
import { EditEmployee } from '@/utils/types/Fom/EditEmployee';
import { StateOption } from '@/utils/types/StateOption';

import "./style.scss";

/**
 * Functional component representing a form for editing employee details.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.employee - The employee object to be edited.
 * @param {Function} props.setIsOpen - A function to control the visibility of the form.
 * @param {Function} props.setEmployeeEdited - A function to set the edited employee's name.
 * @returns {JSX.Element} FormEditEmployee component for editing employee details.
 */
export const FormEditEmployee: React.FC<EditEmployee> = ({ employee, setIsOpen, setEmployeeEdited }) => {
    const dispatch = useDispatch();
    const [states, setStates] = useState<StateOption[]>([]);
    const [formSelectedState, setFormSelectedState] = useState<string | undefined>();

    if (!employee) {
        return (
            <Error />
        );
    }

    const {
        first_name,
        last_name,
        dateOfBirth,
        startDate,
        department,
        address,
        city,
        state,
        zipCode
    } = employee;

    const form = useForm({
        defaultValues: {
            first_name: first_name || '',
            last_name: last_name || '',
            dateOfBirth: new Date(convertLocalDateInUTC(dateOfBirth)).toLocaleDateString('en-CA') || '',
            startDate: new Date(convertLocalDateInUTC(startDate)).toLocaleDateString('en-CA') || '',
            department: department || '',
            address: address || '',
            city: city || '',
            state: state || '',
            zipCode: zipCode,
        },
        mode: 'all',
        resolver: yupResolver(validationSchema),
    });

    const { register, setValue, handleSubmit, formState, reset } = form;

    const { errors, isSubmitSuccessful } = formState;

    const handleSubmitForm = (data: any) => {
        data = {
            ...data,
            dateOfBirth: dateParser(data.dateOfBirth),
            startDate: dateParser(data.startDate),
            id: employee.id,
        };
        dispatch(editUser(data));
        dispatch(setIsSuccessful(true));
        setEmployeeEdited(`${data.first_name} ${data.last_name}`);
        setIsOpen(true);
    };

    useEffect(() => {
        setStates(States);

        setFormSelectedState(employee.state);

        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset, employee, setValue]);

    return (
        <>
            <div className="form-container">
                <div className='title'>
                    <h2>Edit Employee</h2>
                </div>

                <form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
                    <div className="inputs">
                        <InputFirstName
                            register={register}
                            errors={errors.first_name?.message}
                        />
                        <InputLastName
                            register={register}
                            errors={errors.last_name?.message}
                        />
                    </div>
                    <div className="inputs">
                        <InputBirthDay
                            register={register}
                            errors={errors.dateOfBirth?.message}
                        />
                        <InputDate
                            register={register}
                            errors={errors.startDate?.message}
                        />
                        <SelectDepartment
                            register={register}
                            errors={errors.department?.message}
                            setValue={setValue}
                        />
                    </div>

                    <fieldset className="address-inputs">
                        <legend>Address</legend>
                        <InputAddress
                            register={register}
                            errors={errors.address?.message}
                        />
                        <InputCity register={register} errors={errors.city?.message} />
                        {formSelectedState && (
                            <SelectState
                                register={register}
                                errors={errors.state?.message}
                                setValue={setValue}
                                setFormSelectedState={setFormSelectedState}
                                formSelectedState={formSelectedState}
                                states={states}
                            />
                        )}
                        <InputZipCode
                            register={register}
                            errors={errors.zipCode?.message}
                        />
                    </fieldset>
                    <div className="submit-btn">
                        <input
                            type="submit"
                            value="Modify"
                            className="btn"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};
