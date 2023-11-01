import React from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface SelectStateProps {
  register: UseFormRegister<{
    first_name: string,
    last_name: string;
    dateOfBirth: Date;
    startDate: Date;
    department: string;
    address: string;
    city: string;
    state: string;
    zipCode: number;
  }>;
  errors: React.ReactNode;
  setValue: UseFormSetValue<{
    first_name: string,
    last_name: string;
    dateOfBirth: Date;
    startDate: Date;
    department: string;
    address: string;
    city: string;
    state: string;
    zipCode: number;
  }>;
  setFormSelectedState: (value: React.SetStateAction<undefined> | any) => void
  formSelectedState: string;
  states: Array<{ value: string; label: string }>;
}

/**
 * Functional component representing a select input for choosing a state.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.register - The register function from react-hook-form for the input field.
 * @param {string} props.errors - The error message associated with the input field, if any.
 * @param {Function} props.setValue - The setValue function from react-hook-form for setting input field value.
 * @param {Function} props.setFormSelectedState - The function to set the selected state within the component's state.
 * @param {string} props.formSelectedState - The currently selected state within the component's state.
 * @param {Array} props.states - An array of state options for the select input.
 * @returns {JSX.Element} SelectState component for choosing a state.
 */
export const SelectState: React.FC<SelectStateProps> = ({
  register,
  errors,
  setValue,
  setFormSelectedState,
  formSelectedState,
  states,
}) => {
  return (
    <div className="input-container">
      <label htmlFor="state">State</label>
      <select
        {...register('state')}
        id="state"
        className="form-input"
        defaultValue={formSelectedState}
        onChange={(e) => {
          setFormSelectedState(e.target.value);
          setValue('state', e.target.value);
        }}
      >
        {states.map((state, index) => {
          return (
            <option
              key={index}
              value={state.value}
              label={state.label}
            ></option>
          );
        })}
      </select>
      <span className="error-message">{errors}</span>
    </div>
  );
};
