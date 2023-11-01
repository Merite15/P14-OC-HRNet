import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * Functional component representing an input field for the city.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.register - The register function from react-hook-form for the input field.
 * @param {string} props.errors - The error message associated with the input field, if any.
 * @returns {JSX.Element} InputCity component for entering city information.
 */
export const InputCity: React.FC<InputProps> = ({ register, errors }) => {
  return (
    <Input
      name={'city'}
      type={'text'}
      id={'city'}
      label={'city'}
      labelText={'City'}
      isModal={false}
      isAutoComplete={false}
      placeholder={'ex: New York'}
      register={register}
      errors={errors}
    />
  );
};

