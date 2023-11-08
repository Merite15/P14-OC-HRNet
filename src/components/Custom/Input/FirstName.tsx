import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * A custom input first name component that renders a text input field for the user to enter their first name.
 *
 * @param register A React Hook Form register function.
 * @param errors A React Hook Form errors object.
 *
 * @returns A React element representing the input first name component.
 */
export const InputFirstName: React.FC<InputProps> = ({register, errors}) => {
    return (
        <Input
          name={'first_name'}
          type={'text'}
          id={'firstName'}
          label={'firstName'}
          labelText={'First name'}
          isAutoComplete={false}
          placeholder={'ex: Eric'}
          register={register}
          errors={errors}
        />
    );
};