import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * Functional component representing an input field for the last name.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.register - The register function from react-hook-form for the input field.
 * @param {string} props.errors - The error message associated with the input field, if any.
 * @returns {JSX.Element} InputLastName component for entering last name information.
 */
export const InputLastName: React.FC<InputProps> = ({register, errors}) => {
  return (
      <Input
        name={'last_name'}
        type={'text'}
        id={'lastName'}
        label={'lastName'}
        labelText={'Last name'}
        isModal={true}
        isAutoComplete={false}
        placeholder={'ex: DeLaVoie'}
        register={register}
        errors={errors}
      />
  );
};

