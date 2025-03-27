
type Props = {
  children?: React.ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  return (
    <button className="flex gap-2 items-center py-2 px-4 border border-primary hover:bg-primary/20 transition-colors duration-200 cursor-pointer">
      {children || "Button"}
    </button>
  );
};

export default Button;
