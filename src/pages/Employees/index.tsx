import { CustomBreadcrumb } from '@/components/Custom/Breadcrumb';
import { Table } from '@/components/Table';
import { NavLink } from 'react-router-dom';
import './style.scss'

/**
 * A custom React component that renders a list of employees.
 *
 * @returns A React element representing the EmployeeList component.
 */
export const EmployeeList = () => {
    const breadcrumbItems = [
        { label: "Accueil", link: "/" },
        { label: "Employees", },
        { label: "List" }
    ];

    return (
        <main className='list-page-main'>
            <CustomBreadcrumb items={breadcrumbItems} >
                <NavLink to="/employees/new">
                    <span className="add-btn">
                        <i className="fa-solid fa-plus"></i>
                        <span className='add-text'>Add employee</span></span>
                </NavLink>
            </CustomBreadcrumb>
            <Table />
        </main>
    );
};