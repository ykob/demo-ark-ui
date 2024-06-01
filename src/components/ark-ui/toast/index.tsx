import { Toast } from '@ark-ui/react';
import { mdiClose } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Type as ToastType } from '@zag-js/toast';
import { ComponentProps, ReactNode } from 'react';
import { css } from 'styled-system/css';
import { FloatingBox, TransparentButton } from '~/components/common';

type ToastProps = ComponentProps<'div'> & {
  showCloseTrigger?: boolean;
  toastTitle?: ReactNode;
  toastDescription?: ReactNode;
  type?: ToastType;
};

export function ArkToast({
  showCloseTrigger = false,
  toastTitle,
  toastDescription,
  type = 'success',
  ...props
}: ToastProps) {
  const floatingBoxType = () => {
    switch (type) {
      case 'success':
        return 'success';
      case 'error':
        return 'danger';
      case 'info':
        return 'information';
      case 'warning':
        return 'warning';
      default:
        return 'base';
    }
  };

  return (
    <FloatingBox {...props} type={floatingBoxType()}>
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
