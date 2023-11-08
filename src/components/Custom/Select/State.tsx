import React from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface SelectStateProps {
  register: UseFormRegister<{
    first_name: string,
    last_name: string;
    dateOfBirth: string;
    startDate: string;
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
    dateOfBirth: string;
    startDate: string;
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
 * A custom select state component that renders a select input field with options for the different states in the United States.
 *
 * @param register A React Hook Form register function.
 * @param errors A React Hook Form errors object.
 * @param setValue A React Hook Form setValue function.
 * @param setFormSelectedState A function to set the selected state.
 * @param formSelectedState The selected state.
 * @param states An array of state objects.
 *
 * @returns A React element representing the select state component.
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
