interface InputProps {
  name: string;
  type: string;
  id: string;
  label: string;
  labelText: string;
  isAutoComplete: boolean;
  placeholder?: string;
  register: Function;
  errors: string | undefined;
  min?: number;
  max?: number;
}

/**
 * A custom input component that renders a text input field with a label and validation errors.
 *
 * @param name The name of the input field.
 * @param type The type of the input field.
 * @param id The id of the input field.
 * @param label The label for the input field.
 * @param labelText The text for the label of the input field.
 * @param isAutoComplete (Optional) Whether or not the input field should be autocompleted.
 * @param placeholder (Optional) The placeholder text for the input field.
 * @param register A React Hook Form register function.
 * @param errors A React Hook Form errors object.
 * @param min (Optional) The minimum value for the input field.
 * @param max (Optional) The maximum value for the input field.
 *
 * @returns A React element representing the input component.
 */

export const Input: React.FC<InputProps> = ({
  name,
  type,
  id,
  label,
  labelText,
  isAutoComplete,
  placeholder,
  register,
  errors,
  min,
  max,
}) => {
  return (
    <div className="input-container relative">
      <label htmlFor={label}>
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        min={min}
        max={max}
        className="form-input"
        autoComplete={isAutoComplete ? 'on' : 'none'}
        placeholder={placeholder}
        {...register(name)}
      />
      <span className="error-message">{errors}</span>
    </div>
  );
};
