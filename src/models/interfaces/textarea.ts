export interface ITextarea {
    placeholder : string
    value : string
    onchange : (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}