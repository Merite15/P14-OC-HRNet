import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * A custom input date component that renders a date input field for the user to enter a date.
 *
 * @param register A React Hook Form register function.
 * @param errors A React Hook Form errors object.
 *
 * @returns A React element representing the input date component.
 */
export const InputDate: React.FC<InputProps> = ({ register, errors }) => {
  return (
      <Input
        name={'startDate'}
        type={'date'}
        id={'startDate'}
        label={'startDate'}
        labelText={'Start date'}
        isAutoComplete={false}
        register={register}
        errors={errors}
      />
  );
};

