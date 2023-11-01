import { Link } from "react-router-dom";
import './style.scss'
import { BreadCrumbProps } from "@/utils/types/BreadCrumbProps";

/**
 * Functional component representing a custom breadcrumb navigation.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.items - An array of objects representing breadcrumb items.
 * @param {ReactNode} props.children - Child elements to be included within the breadcrumb component.
 * @returns {JSX.Element} CustomBreadcrumb component for displaying breadcrumb navigation.
 */
export const CustomBreadcrumb: React.FC<BreadCrumbProps> = ({ items, children }) => {
    return (
        <div className="breadcrumb">
            <div className="breadcrumb-items">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <span key={item.label} >
                            {item.link ? (
                                <Link to={item.link} className="breadcrumb-link">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="breadcrumb-label">{item.label}</span>
                            )}
                            {!isLast && <span className="breadcrumb-separator">/</span>}
                        </span>
                    );
                })}
            </div>

            {children}
        </div>
    );
};