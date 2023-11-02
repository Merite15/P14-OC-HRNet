import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * A custom input last name component that renders a text input field for the user to enter their last name.
 *
 * @param register A React Hook Form register function.
 * @param errors A React Hook Form errors object.
 *
 * @returns A React element representing the input last name component.
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

