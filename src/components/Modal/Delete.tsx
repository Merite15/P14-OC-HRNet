import { Modal } from 'vite-react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDeleted, setIsSelected, setIsSuccessful } from '@/store/formStatus';
import { deleteUser } from '@/store/users';
import { EmployeeSelected } from '@/utils/types/EmployeeSelected';
import { State } from '@/utils/types/State';
import "./style.scss";

/**
 * A custom React component that renders a modal for deleting an employee.
 *
 * @param employeeSelected The ID of the employee to delete.
 *
 * @returns A React element representing the DeleteModal component.
 */
export const DeleteModal: React.FC<EmployeeSelected> = ({ employeeSelected }) => {
  const isSuccessfull = useSelector((state: State) => state.status.isSuccessfull);
  const isDeleted = useSelector((state: State) => state.status.isDeleted);
  const isSelected = useSelector((state: State) => state.status.isSelected);
  const dispatch = useDispatch();

  const employee = useSelector((state: State) =>
    state.employees.filter(
      (employee) => employee.id === parseInt(employeeSelected)
    )
  );

  const ContentDeleteModal = () => {
    if (employee[0])
      return (
        <>
          <p className='trash-text'>
            <i className="fa-solid fa-exclamation"></i>
            <span>Est vous sur que vous voulez supprimer l'employé</span>
            <span>{`${employee[0].first_name} ${employee[0].last_name}`}</span>
          </p>
          <div className="modal-btn">
            <button
              className="btn-cancel"
              onClick={() => {
                dispatch(setIsDeleted(false));
              }}
            >
              Cancel
            </button>
            <button
              className="btn-success"
              onClick={() => {
                dispatch(setIsSelected(false));
                dispatch(deleteUser(employee[0].id));
                dispatch(setIsSuccessful(true));
              }}
            >
              Delete
            </button>
          </div>
        </>
      );
  };

  if (isSelected && !isSuccessfull)
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
          show={isSuccessfull}
          title={'Suppression effectuée'}
          content={`Employee was deleted!`}

        />
      </>
    );
};
