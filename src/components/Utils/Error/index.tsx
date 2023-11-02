import "./style.scss";

/**
 * A custom React component that displays an error if the employee the user is trying to edit does not exist.
 *
 * @returns A React element representing the Error component.
 */
export const Error = () => {
    return (
        <div className="error">
            L'employé que vous essayez de modifier n'existe pas.
        </div>
    )
}