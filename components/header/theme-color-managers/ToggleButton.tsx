type ToggleButtonProps = {
  title: string;
  onClick: () => void;
  children: JSX.Element | string;
};

export const ToggleButton = ({ children, ...props }: ToggleButtonProps) => {
  return (
    <button
      className="mr-3 mobile:mr-6  last:mr-0 p-0 w-9 h-9 border-none rounded flex justify-center items-center bg-accent dark:bg-dark-blue cursor-pointer focus:outline-none"
      {...props}
    >
      {children}
    </button>
  );
};

export default ToggleButton;
