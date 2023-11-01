import { CustomBreadcrumb } from '@/components/Custom/Breadcrumb';
import { Table } from '@/components/Table';
import { NavLink } from 'react-router-dom';
import './style.scss'

/**
 * The EmployeeList component renders a main section with a breadcrumb navigation and a table.
 * @returns The EmployeeList component is returning a main element with the className 'list-page-main'.
 * Inside the main element, there is a CustomBreadcrumb component with the breadcrumbItems as props.
 * Inside the CustomBreadcrumb component, there is a NavLink component with the to prop set to
 * "/employees/new". Inside the NavLink component, there is a li element with the className 'add-btn'.
 * Inside the li element, there is
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
                    <li className="add-btn">
                        <i className="fa-solid fa-plus"></i>
                        <span className='add-text'>Add employee</span></li>
                </NavLink>
            </CustomBreadcrumb>
            <Table />
        </main>
    );
};