import { Toast } from '@ark-ui/react';
import { mdiClose } from '@mdi/js';
import { Icon } from '@mdi/react';
import { ComponentProps, ReactNode } from 'react';
import { css } from 'styled-system/css';
import { FloatingBox, TransparentButton } from '~/components/common';

type ToastProps = ComponentProps<'div'> & {
  toastTitle?: ReactNode;
  toastDescription?: ReactNode;
  showCloseTrigger?: boolean;
};

export function ArkToast({
  toastTitle,
  toastDescription,
  showCloseTrigger = false,
  ...props
}: ToastProps) {
  return (
    <FloatingBox {...props}>
      <div className={styles.container}>
        <div className={styles.content}>
          {toastTitle && <div>{toastTitle}</div>}
          {toastDescription && <div>{toastDescription}</div>}
        </div>
        {showCloseTrigger && (
          <Toast.CloseTrigger asChild>
            <TransparentButton square>
              <Icon path={mdiClose} size={1} />
            </TransparentButton>
          </Toast.CloseTrigger>
        )}
      </div>
    </FloatingBox>
  );
}

const styles = {
  container: css({
    display: 'grid',
    m: 2,
    gridTemplateColumns: '1fr 32px',
  }),
  content: css({
    p: 2,
  }),
};
