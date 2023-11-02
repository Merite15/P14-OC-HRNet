import { Link } from "react-router-dom";
import './style.scss'
import { BreadCrumbProps } from "@/utils/types/BreadCrumbProps";


/**
 * A custom breadcrumb component that renders a list of links, with separators between them, that indicate the current page's location within a navigational hierarchy.
 *
 * @param items An array of breadcrumb items, each of which is an object with the following properties:
 *   * `label`: The text to display for the breadcrumb item.
 *   * `link`: (Optional) The URL to link to for the breadcrumb item.
 * @param children (Optional) Any child components to render below the breadcrumb trail.
 *
 * @returns A React element representing the breadcrumb component.
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