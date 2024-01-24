export default function ButtonFill({ onClick, children, className }) {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-600 h-12 w-full rounded-md  hover:bg-blue-500 ${className}`}>
            {children}
        </button>
    )
}
