interface ChildProps {
  color: string;
  onClick: () => void;
  children: string;
}

export const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
