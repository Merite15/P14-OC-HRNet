import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * Functional component representing an input field for the first name.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.register - The register function from react-hook-form for the input field.
 * @param {string} props.errors - The error message associated with the input field, if any.
 * @returns {JSX.Element} InputFirstName component for entering first name information.
 */
export const InputFirstName: React.FC<InputProps> = ({register, errors}) => {
    return (
        <Input
          name={'first_name'}
          type={'text'}
          id={'firstName'}
          label={'firstName'}
          labelText={'First name'}
          isModal={true}
          isAutoComplete={false}
          placeholder={'ex: Eric'}
          register={register}
          errors={errors}
        />
    );
};