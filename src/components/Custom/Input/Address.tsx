import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * A custom input address component that renders a text input field for the user to enter their address.
 *
 * @param register A React Hook Form register function.
 * @param errors A React Hook Form errors object.
 *
 * @returns A React element representing the input address component.
 */

export const InputAddress: React.FC<InputProps> = ({ register, errors }) => {
  return (
    <Input
      name={'address'}
      type={'text'}
      id={'street'}
      label={'street'}
      labelText={'Street'}
      isAutoComplete={false}
      placeholder={'ex: 77 Massachusetts Avenue'}
      register={register}
      errors={errors}
    />
  );
};