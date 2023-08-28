import { ChangeEvent, ForwardRefRenderFunction, forwardRef } from 'react';
interface IInput {
    placeholder: string;
    type: string;
    className?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const InputBase: ForwardRefRenderFunction<
    HTMLInputElement & HTMLTextAreaElement,
    IInput
> = ({ placeholder, type, className, ...rest }, ref) => {

    return (
        <div className={`w-full flex mb-4 text-blue font-medium ${className}`}>
            <input
                className={`w-3/4 px-6 py-[5px] bg-white rounded-lg border border-brown-secundary  `}
                type={type}
                placeholder={placeholder}
                ref={ref}
                {...rest}
            />
        </div>
    );
};
export const Input = forwardRef(InputBase);