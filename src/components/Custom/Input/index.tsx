import { CustomTooltip } from '../../Custom/Tooltip';

interface InputProps {
  name: string;
  type: string;
  id: string;
  label: string;
  labelText: string;
  isModal: boolean;
  isAutoComplete: boolean;
  placeholder?: string;
  register: Function;
  errors: string | undefined;
  min?: number;
  max?: number;
}

/**
 * Functional component representing an input field.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.name - The name attribute for the input field.
 * @param {string} props.type - The type of input (e.g., text, date, etc.).
 * @param {string} props.id - The id attribute for the input field.
 * @param {string} props.label - The label attribute for the input field.
 * @param {string} props.labelText - The text displayed as the label for the input field.
 * @param {boolean} props.isModal - A flag indicating whether the input field is used in a modal.
 * @param {boolean} props.isAutoComplete - A flag indicating whether auto-completion is enabled for the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {Function} props.register - The register function from react-hook-form for the input field.
 * @param {string} props.errors - The error message associated with the input field, if any.
 * @param {string} props.min - The minimum value allowed for the input field.
 * @param {string} props.max - The maximum value allowed for the input field.
 * @returns {JSX.Element} Input component for various input fields.
 */

export const Input: React.FC<InputProps> = ({
  name,
  type,
  id,
  label,
  labelText,
  isModal,
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
        {isModal && <CustomTooltip />}
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
