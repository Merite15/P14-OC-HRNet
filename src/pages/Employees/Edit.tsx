import { useState, useEffect } from 'react';

import { Modal } from 'vite-react-modal';
import { CustomBreadcrumb } from '@/components/Custom/Breadcrumb';
import { State } from '@/utils/types/State';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from '@/components/Utils/Loader';
import { FormEditEmployee } from '@/components/Form/EditEmployee';

/**
 * The `EditEmployee` component is a TypeScript React component that allows users to edit employee
 * information and displays a modal when an employee is successfully edited.
 * @returns The component is returning a main element that contains a CustomBreadcrumb component, a
 * FormEditEmployee component, and a Modal component.
 */
export const EditEmployee = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [employeeCreated, setEmployeeEdited] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const breadcrumbItems = [
        { label: "Accueil", link: "/" },
        { label: "Employees", link: "/employees" },
        { label: "Edit Employee" }
    ];

    const params = useParams()

    const employee = useSelector((state: State) =>
        state.employees.find(
            (employee) => employee.id === parseInt(params.id)
        )
    );

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [params.id]);

    if (isLoading)
        return (
            <Loader />
        );

    return (
        <main>
            <CustomBreadcrumb items={breadcrumbItems} />
            <FormEditEmployee employee={employee} setIsOpen={setIsOpen} setEmployeeEdited={setEmployeeEdited} />
            <Modal
                close={() => setIsOpen(false)}
                show={isOpen}
                title={'Employee edited'}
                content={`Employee ${employeeCreated} was edited!`}
            />
        </main>
    );
};