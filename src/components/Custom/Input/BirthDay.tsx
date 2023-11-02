import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * A custom input birthday component that renders a date input field for the user to enter their date of birth.
 *
 * @param register A React Hook Form register function.
 * @param errors A React Hook Form errors object.
 *
 * @returns A React element representing the input birthday component.
 */
export const InputBirthDay: React.FC<InputProps> = ({ register, errors }) => {
  return (
      <Input
        name={'dateOfBirth'}
        type={'date'}
        id={'dateOfBirth'}
        label={'dateOfBirth'}
        labelText={'Date of birth'}
        isModal={false}
        isAutoComplete={false}
        register={register}
        errors={errors}
      />
  );
};
