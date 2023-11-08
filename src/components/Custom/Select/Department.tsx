import React from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface SelectDepartmentProps {
  register: UseFormRegister<{
    first_name: string,
    last_name: string;
    dateOfBirth:  string;
    startDate:  string;
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
    dateOfBirth:  string;
    startDate:  string;
    department: string;
    address: string;
    city: string;
    state: string;
    zipCode: number;
  }>;
}

/**
 * A custom select department component that renders a select input field with options for the different departments in the company.
 *
 * @param register A React Hook Form register function.
 * @param errors A React Hook Form errors object.
 * @param setValue A React Hook Form setValue function.
 *
 * @returns A React element representing the select department component.
 */
export const SelectDepartment: React.FC<SelectDepartmentProps> = ({ register, errors, setValue }) => {
  return (
    <div className="input-container">
      <label htmlFor="department">Department</label>
      <select
        {...register('department')}
        id="department"
        className="form-input"
        onChange={(e) => {
          setValue('department', e.target.value);
        }}
      >
        <option value="Sales" label="Sales"></option>
        <option value="Marketing" label="Marketing"></option>
        <option value="Engineering" label="Engineering"></option>
        <option value="Human Ressources" label="Human Ressources"></option>
        <option value="Legal" label="Legal"></option>
      </select>
      <span className="error-message">{errors}</span>
    </div>
  );
};