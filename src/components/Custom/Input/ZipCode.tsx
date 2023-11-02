import { Input } from './index';
import { InputProps } from "@/utils/types/InputProps";

/**
 * A custom input zip code component that renders a number input field for the user to enter their zip code.
 *
 * @param register A React Hook Form register function.
 * @param errors A React Hook Form errors object.
 *
 * @returns A React element representing the input zip code component.
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

