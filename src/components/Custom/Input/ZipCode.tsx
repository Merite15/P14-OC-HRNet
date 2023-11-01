import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * Functional component representing an input field for the zip code.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.register - The register function from react-hook-form for the input field.
 * @param {string} props.errors - The error message associated with the input field, if any.
 * @returns {JSX.Element} InputZipCode component for entering zip code information.
 */
export const InputZipCode: React.FC<InputProps> = ({ register, errors }) => {
  return (
      <Input
        name={'zipCode'}
        type={'number'}
        id={'zipCode'}
        label={'zipCode'}
        labelText={'Zip Code'}
        isModal={false}
        isAutoComplete={false}
        min={501}
        max={99950}
        placeholder={'501 to 99950'}
        register={register}
        errors={errors}
      />
  );
};

