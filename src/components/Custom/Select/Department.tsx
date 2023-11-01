import React from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface SelectDepartmentProps {
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
}

/**
 * Functional component representing a select input for choosing a department.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.register - The register function from react-hook-form for the input field.
 * @param {string} props.errors - The error message associated with the input field, if any.
 * @param {Function} props.setValue - The setValue function from react-hook-form for setting input field value.
 * @returns {JSX.Element} SelectDepartment component for choosing a department.
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