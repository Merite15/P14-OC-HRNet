import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { States } from '@/utils/States';
import { yupResolver } from '@hookform/resolvers/yup';
import { convertLocalDateInUTC, dateParser } from '@/utils/DateFunctions';
import { useDispatch } from 'react-redux';
import { addUser } from '@/store/users';
import { InputFirstName } from '../Custom/Input/FirstName';
import { InputLastName } from '../Custom/Input/LastName';
import { InputBirthDay } from '../Custom/Input/BirthDay';
import { InputDate } from '../Custom/Input/Date';
import { InputAddress } from '../Custom/Input/Address';
import { InputCity } from '../Custom/Input/City';
import { InputZipCode } from '../Custom/Input/ZipCode';
import { SelectDepartment } from '../Custom/Select/Department';
import { SelectState } from '../Custom/Select/State';
import { validationSchema } from '../../utils/ValidationSchema';
import { StateOption } from '@/utils/types/StateOption';
import { CreateEmployee } from '@/utils/types/Fom/CreateEmployee';

import "./style.scss";

/**
 * A custom React component that renders a form for creating a new employee.
 *
 * @param setIsOpen A function to set the state of the form modal.
 * @param setEmployeeCreated A function to set the state of the created employee.
 *
 * @returns A React element representing the FormNewEmployee component.
 */
export const FormNewEmployee: React.FC<CreateEmployee> = ({ setIsOpen, setEmployeeCreated }) => {
  const [states, setStates] = useState<StateOption[]>([]); 
  const dispatch = useDispatch();
  const [formSelectedState, setFormSelectedState] = useState<string | undefined>();

  const form = useForm({
    defaultValues: {
      first_name: 'Eric',
      last_name: 'Beaumont',
      dateOfBirth: `${new Date(convertLocalDateInUTC(new Date(1987, 2, 18)))
        .toISOString()
        .slice(0, 10)
        }`,
      startDate: `${new Date(convertLocalDateInUTC(new Date(2007, 1, 30)))
        .toISOString()
        .slice(0, 10)
        }`,
      department: 'Legal',
      address: '26 Park',
      city: 'Alabama',
      state: 'NY',
      zipCode: 501,
    },

    mode: 'all',
    resolver: yupResolver(validationSchema),
  });

  const { register, setValue, handleSubmit, formState, reset } = form;

  const { errors, isSubmitSuccessful } = formState;

  const handleSubmitForm = (data: any) => {
    const uid = Date.now();
    data = {
      ...data,
      dateOfBirth: dateParser(data.dateOfBirth),
      startDate: dateParser(data.startDate),
      id: uid,
    };
    dispatch(addUser(data));
    setEmployeeCreated(`${data.first_name} ${data.last_name}`);
    setIsOpen(true);
  };

  useEffect(() => {
    setStates(States);

    setFormSelectedState('NY');

    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset, setValue]);

  return (
    <>
      <div className="form-container">
        <div className='title'>
          <h2>New Employee</h2>
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
              value="Add"
              className="btn"
            />
          </div>
        </form>
      </div>
    </>
  );
};
