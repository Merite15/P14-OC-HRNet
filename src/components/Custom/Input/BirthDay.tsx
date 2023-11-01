import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * Functional component representing an input field for the date of birth.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.register - The register function from react-hook-form for the input field.
 * @param {string} props.errors - The error message associated with the input field, if any.
 * @returns {JSX.Element} InputBirthDay component for entering date of birth information.
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
