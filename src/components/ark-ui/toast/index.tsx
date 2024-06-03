import { mdiClose } from '@mdi/js';
import { Icon } from '@mdi/react';
import { ComponentProps, ReactNode } from 'react';
import { css } from 'styled-system/css';
import { FloatingBox, TransparentButton } from '~/components/common';

type ToastProps = ComponentProps<'div'> & {
  dismiss?: (id?: string) => void;
  toastTitle?: ReactNode;
  toastDescription?: ReactNode;
  type?: ToastType;
};

export function ArkToast({
  dismiss,
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
        {dismiss && (
          <TransparentButton
            square
            onClick={() => {
              dismiss(props.id);
            }}
          >
            <Icon path={mdiClose} size={1} />
          </TransparentButton>
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
