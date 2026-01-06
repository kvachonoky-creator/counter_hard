export type ButtonType = {
    onClick: () => void;
    className?: string;
    title: string;
    disabled?: boolean;
    hidden?: boolean
}

export const Button = ({
                           onClick,
                           className,
                           title,
                           disabled,
                           hidden
                       }: ButtonType) => {
    return (
        <button
            onClick={() => onClick()}
            className={className}
            title={title}
            disabled={disabled}
            hidden={hidden}>
            {title}
        </button>
    );
};

