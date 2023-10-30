import "./style.scss";

/**
 * Functional component representing an error message displayed when attempting to modify a non-existent employee.
 *
 * @component
 * @example
 * // Usage of the Error component
 * <Error />
 *
 * @returns {JSX.Element} Error component displaying a message for non-existent employee modification.
 */
export const Error = () => {
    return (
        <div className="error">
            L'employé que vous essayez de modifier n'existe pas.
        </div>
    )
}