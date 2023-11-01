import { useState } from 'react';
import { Modal } from 'vite-react-modal';
import { CustomBreadcrumb } from '@/components/Custom/Breadcrumb';
import { FormNewEmployee } from '@/components/Form/NewEmployee';

/**
 * The NewEmployee component renders a form to create a new employee and displays a modal with a
 * success message when the employee is created.
 * @returns The code is returning a JSX element that represents the main content of the page. It
 * includes a custom breadcrumb component, a form for creating a new employee, and a modal component
 * for displaying a success message when an employee is created.
 */
export const NewEmployee = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [employeeCreated, setEmployeeCreated] = useState('');
    const breadcrumbItems = [
        { label: "Accueil", link: "/" },
        { label: "Employees", link: "/employees" },
        { label: "New Employee" }
    ];

    return (
        <main>
            <CustomBreadcrumb items={breadcrumbItems} />
            <FormNewEmployee setIsOpen={setIsOpen} setEmployeeCreated={setEmployeeCreated} />
            <Modal
                close={() => setIsOpen(false)}
                show={isOpen}
                title={'Employé crée'}
                content={`Employee ${employeeCreated} was created!`}
            />
        </main>
    );
};