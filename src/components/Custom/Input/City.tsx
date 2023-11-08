import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * A custom input city component that renders a text input field for the user to enter their city.
 *
 * @param register A React Hook Form register function.
 * @param errors A React Hook Form errors object.
 *
 * @returns A React element representing the input city component.
 */

export const InputCity: React.FC<InputProps> = ({ register, errors }) => {
  return (
    <Input
      name={'city'}
      type={'text'}
      id={'city'}
      label={'city'}
      labelText={'City'}
      isAutoComplete={false}
      placeholder={'ex: New York'}
      register={register}
      errors={errors}
    />
  );
};

