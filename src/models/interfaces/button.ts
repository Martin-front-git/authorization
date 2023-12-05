export interface IButton {
    text: string;
    onClick?: () => void;
    disabled?: boolean
    children?: React.ReactNode;
}
