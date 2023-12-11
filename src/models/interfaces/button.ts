export interface IButton {
    text: string;
    width? : string;
    onClick?: () => void;
    disabled?: boolean
    children?: React.ReactNode;
}
