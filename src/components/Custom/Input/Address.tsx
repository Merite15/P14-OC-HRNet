import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * Functional component representing an input field for the address/street.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.register - The register function from react-hook-form for the input field.
 * @param {string} props.errors - The error message associated with the input field, if any.
 * @returns {JSX.Element} InputAddress component for entering address/street information.
 */

export const InputAddress: React.FC<InputProps> = ({ register, errors }) => {
  return (
    <Input
      name={'address'}
      type={'text'}
      id={'street'}
      label={'street'}
      labelText={'Street'}
      isModal={false}
      isAutoComplete={false}
      placeholder={'ex: 77 Massachusetts Avenue'}
      register={register}
      errors={errors}
    />
  );
};