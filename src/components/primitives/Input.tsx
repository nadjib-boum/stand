import * as Form from "@radix-ui/react-form";
import { Controller } from "react-hook-form";
import { Control } from "@radix-ui/react-form";
import { type UseFormReturn, type FieldValues } from "react-hook-form";

type FormType<T extends FieldValues> = UseFormReturn<T, any, undefined>;

type InputProps = {
  icon: React.ReactNode;
  form: any;
  name: string;
  placeholder?: string;
  type?: "text" | "password";
};

const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  form,
  placeholder,
  icon,
}) => {
  const {
    control,
    formState: { errors },
  } = form;

  return (
    <Form.Field name={name}>
      {errors[name]?.message && (
        <Form.Message className={"text-red-500 text-sm ml-.5 mb-1 block"}>
          {errors[name]?.message}
        </Form.Message>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div className="relative">
            <Control asChild>
              <input
                className="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 "
                type={type}
                placeholder={placeholder}
                {...field}
              />
            </Control>
            {icon && (
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                {icon}
              </div>
            )}
          </div>
        )}
      />
    </Form.Field>
  );
};

export default Input;
