export const Button = ({
  label,
  type,
  onClick,
  ...delegated
}: {
  label: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  [key: string]: unknown;
}) => {
  return (
    <button {...delegated} onClick={onClick} type={type}>
      {label}
    </button>
  );
};
