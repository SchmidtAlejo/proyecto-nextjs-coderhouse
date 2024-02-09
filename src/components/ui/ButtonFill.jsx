export default function ButtonFill({ onClick, children, className, disabled}) {

    return (
        <button
            onClick={onClick}
            className={`${!disabled? "bg-blue-600" : "bg-blue-400"} h-12 w-full rounded-md  hover:bg-blue-500 ${className}`}>
            {children}
        </button>
    )
}
