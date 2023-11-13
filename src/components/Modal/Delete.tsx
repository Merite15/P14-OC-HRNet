import { Modal } from 'vite-react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDeleted, setIsSelected, setIsSuccessful } from '@/store/formStatus';
import { deleteUser } from '@/store/users';
import { EmployeeSelected } from '@/utils/types/EmployeeSelected';
import { State } from '@/utils/types/State';
import "./style.scss";
import { useMemo } from 'react';

/**
 * A custom React component that renders a modal for deleting an employee.
 *
 * @param employeeSelected The ID of the employee to delete.
 *
 * @returns A React element representing the DeleteModal component.
 */
export const DeleteModal: React.FC<EmployeeSelected> = ({ employeeSelected }) => {
  const isSuccessful = useSelector((state: State) => state.status.isSuccessful);
  const isDeleted = useSelector((state: State) => state.status.isDeleted);
  const isSelected = useSelector((state: State) => state.status.isSelected);
  const dispatch = useDispatch();

  const employees = useSelector((state: State) => state.employees);
  const filteredEmployee = useMemo(
    () => employees.filter((emp) => emp.id === parseInt(employeeSelected)),
    [employees, employeeSelected]
  );

  const ContentDeleteModal = () => {
    if (filteredEmployee[0])
      return (
        <>
          <p className='trash-text'>
            <i className="fa-solid fa-exclamation"></i>
            <span>Est vous sur que vous voulez supprimer l'employé</span>
            <span>{`${filteredEmployee[0].first_name} ${filteredEmployee[0].last_name}`}</span>
          </p>
          <div className="modal-btn">
            <button
              id="cancel" aria-label="Cancel"
              role='button'
              className="btn-cancel"
              onClick={() => {
                dispatch(setIsDeleted(false));
              }}
            >
              Cancel
            </button>
            <button
              id="success" aria-label="success"
              role='button'
              className="btn-success"
              onClick={() => {
                dispatch(setIsSelected(false));
                dispatch(deleteUser(filteredEmployee[0].id));
                dispatch(setIsSuccessful(true));
              }}
            >
              Delete
            </button>
          </div>
        </>
      );
  };

  if (isSelected && !isSuccessful)
    return (
      <>
        <Modal
          title={'Delete Employee '}
          content={<ContentDeleteModal />}
          close={() => {
            dispatch(setIsDeleted(false));
          }}
          show={isDeleted}
        />
      </>
    );

  if (isDeleted)
    return (
      <>
        <Modal
          close={() => {
            dispatch(setIsDeleted(false));
            dispatch(setIsSuccessful(false));
            dispatch(setIsSelected(false));
          }}
          show={isSuccessful}
          title={'Suppression effectuée'}
          content={`Employee was deleted!`}
        />
      </>
    );
};
