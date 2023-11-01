import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * Functional component representing an input field for the start date.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.register - The register function from react-hook-form for the input field.
 * @param {string} props.errors - The error message associated with the input field, if any.
 * @returns {JSX.Element} InputDate component for entering start date information.
 */
export const InputDate: React.FC<InputProps> = ({ register, errors }) => {
  return (
      <Input
        name={'startDate'}
        type={'date'}
        id={'startDate'}
        label={'startDate'}
        labelText={'Start date'}
        isModal={false}
        isAutoComplete={false}
        register={register}
        errors={errors}
      />
  );
};

