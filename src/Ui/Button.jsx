const buttons = {
    primary: (children, props) => (
      <button
        {...props}
        className={`bg-secondary-color text-white py-2 px-4 rounded-xs hover:bg-transparent border-secondary-color border-2 transition duration-300 ease-in-out cursor-pointer ${props.className || ''}`}
        >
        {children}
      </button>
    ),
    secondary: (children, props) => (
      <button
        {...props}
        className={`bg-transparent text-white py-2 px-4 rounded-xs hover:bg-secondary-color border-secondary-color border-2 transition duration-300 ease-in-out cursor-pointer ${props.className || ''}`}
        >
        {children}
      </button>
    ),
  };
  
  export default function Button({ variant = "primary", children, ...props }) {
    const renderButton = buttons[variant] || buttons["primary"];
    return renderButton(children, props);
  }
  