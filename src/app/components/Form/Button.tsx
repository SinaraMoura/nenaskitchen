interface IButtonProps {
    title: string;
    className?: string;
}

export const Button = ({ title, className }: IButtonProps) => {
    return (
        <div className={`flex items-center justify-center w-full text-scale-gray-7`}>
            <button className={`bg-backing-color-3 rounded-2xl px-4 font-bold py-4 uppercase ${className}`}>
                {title}
            </button>
        </div>
    );
};