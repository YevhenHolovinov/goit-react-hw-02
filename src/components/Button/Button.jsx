export default function Button ({btnType = 'button', handleClick, children }) {
    return (
        <button
            onClick={() => handleClick(children.toLowerCase())}
            type={btnType}
            aria-label={`button${children}`}  
        >
            {children}
        </button>
    );
};
