import { mdiClose } from '@mdi/js';
import { Icon } from '@mdi/react';
import { ComponentProps } from 'react';
import { FloatingBox, TransparentButton } from '.';

type ToastProps = ComponentProps<'div'> & {
  toastTitle?: string;
  toastDescription?: string;
  removeToast?: () => void;
};

export function Toast({
  toastTitle,
  toastDescription,
  removeToast,
  ...props
}: ToastProps) {
  return (
    <FloatingBox {...props}>
      {toastTitle && <div>{toastTitle}</div>}
      {toastDescription && <div>{toastDescription}</div>}
      {removeToast && (
        <TransparentButton square onClick={removeToast}>
          <Icon path={mdiClose} size={1} />
        </TransparentButton>
      )}
    </FloatingBox>
  );
}
