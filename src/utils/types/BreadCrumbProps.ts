export interface BreadCrumbProps {
    items: {
        label: string;
        link?: string;
    }[];
    children?: React.ReactNode;
}
