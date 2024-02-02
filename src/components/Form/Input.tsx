import { ChangeEvent, ForwardRefRenderFunction, forwardRef } from 'react';
interface IInput {
    placeholder?: string;
    type: string;
    title: string;
    className?: string;
    value?: string;
}
export const InputBase: ForwardRefRenderFunction<
    HTMLInputElement & HTMLTextAreaElement,
    IInput
> = ({ placeholder, type, title, className, ...rest }, ref) => {

    return (
        <div className={`mb-4 text-scale-gray-6 font-medium ${className}`}>
            <label>{title}</label>
            <input
                className={`w-full px-6 py-[5px] bg-white rounded-lg border border-color-secundary-1  `}
                type={type}
                placeholder={placeholder}
                ref={ref}
                {...rest}
            />
        </div>
    );
};
export const Input = forwardRef(InputBase);