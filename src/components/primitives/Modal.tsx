import { useAtom } from "jotai";
import * as Form from "@radix-ui/react-form";
import * as Dialog from "@radix-ui/react-dialog";
import MountingProvider from "@/providers/HyrdationProvider";
import { CloseIcon } from "@/components/icons";
import Button from "./Button";

type ModalProps = {
  open: any;
  setOpen: any;
  label?: string;
  title: string;
  description: string;
  body: React.ReactNode;
  footer?: React.ReactNode;
  actionLabel: string;
  actionHandler: React.FormEventHandler<HTMLFormElement>;
  actionLoading?: boolean;
  secondaryActionLabel?: string;
  secondaryActionHandler?: React.MouseEventHandler<HTMLButtonElement>;
};

const Modal: React.FC<ModalProps> = ({
  open,
  setOpen,
  label,
  title,
  description,
  body,
  footer,
  actionLabel,
  actionHandler,
  actionLoading,
  secondaryActionLabel,
  secondaryActionHandler,
}) => {
  return (
    <MountingProvider>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        {label && (
          <Dialog.Trigger asChild>
            <button className="Button violet">{label}</button>
          </Dialog.Trigger>
        )}
        <Dialog.Portal>
          <Dialog.Overlay
            className="bg-gray-900/20 fixed inset-0"
            style={{
              animation: `overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
            }}
          />
          <Dialog.Content
            className="bg-[white] fixed -translate-x-2/4 -translate-y-2/4 w-[90vw] max-w-[450px] max-h-[85vh] p-[25px] rounded-md left-2/4 top-2/4"
            style={{
              boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px`,
              animation: `contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
            }}
          >
            <Dialog.Title className="m-0 font-semibold text-lg">
              {title}
            </Dialog.Title>
            <Dialog.Description className="text-sm leading-normal mt-2.5 mb-5 mx-0">
              {description}
            </Dialog.Description>
            <Form.Root onSubmit={actionHandler}>
              {body}
              <div className="flex justify-end mt-6 gap-2">
                {secondaryActionLabel && secondaryActionHandler && (
                  <Button onClick={secondaryActionHandler} variant="outline">
                    {secondaryActionLabel}
                  </Button>
                )}
                <Button
                  type="submit"
                  variant="primary"
                  full={!secondaryActionLabel}
                  loading={actionLoading}
                >
                  {actionLabel}
                </Button>
              </div>
              {footer && <div className="mt-6">{footer}</div>}
            </Form.Root>
            <Dialog.Close asChild>
              <button
                className="p-0.5 h-[25px] w-[25px] inline-flex items-center justify-center absolute rounded-[100%] right-2.5 top-2.5 focus:shadow-[0_0_0_2px_rgba(0,0,0,.1)] cursor-pointer"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </MountingProvider>
  );
};

export default Modal;
