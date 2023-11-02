import { useState } from 'react';
import { Modal } from 'vite-react-modal';
import { CustomBreadcrumb } from '@/components/Custom/Breadcrumb';
import { FormNewEmployee } from '@/components/Form/NewEmployee';

/**
 * A custom React component that renders the new employee form.
 *
 * @returns A React element representing the NewEmployee component.
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