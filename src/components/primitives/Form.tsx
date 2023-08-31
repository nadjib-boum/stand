import * as _Form from "@radix-ui/react-form";

export const Form: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <_Form.Root>{children}</_Form.Root>;
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ children, name, ...rest }) => {
  return <_Form.Control>{children}</_Form.Control>;
};
