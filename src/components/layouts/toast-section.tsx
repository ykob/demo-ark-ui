import { createToaster, Portal, Toaster } from '@ark-ui/react';
import { ReactNode } from 'react';
import { css } from 'styled-system/css';
import { Toast, type ToastType } from '~/components/ark-ui/';
import {
  TransparentButton,
  UISection,
  UISectionHeading,
} from '~/components/common';

export function ToastSection() {
  const toaster = createToaster({
    placement: 'bottom-end',
    duration: 5000,
  });

  const createToast = ({
    title,
    description,
    type = 'info',
  }: {
    title: ReactNode;
    description?: ReactNode;
    type?: ToastType;
  }) => {
    toaster.create({
      title,
      description,
      type,
    });
  };

  return (
    <UISection>
      <UISectionHeading>Toast</UISectionHeading>
      <div>
        <TransparentButton
          onClick={() => {
            createToast({
              title: <div>`#${new Date().toISOString()}`</div>,
              description: 'It is a success toast.',
              type: 'success',
            });
          }}
        >
          Add Success Toast
        </TransparentButton>
        <TransparentButton
          onClick={() => {
            createToast({
              title: <div>`#${new Date().toISOString()}`</div>,
              description: 'It is an error toast.',
              type: 'error',
            });
          }}
        >
          Add Error Toast
        </TransparentButton>
        <TransparentButton
          onClick={() => {
            createToast({
              title: <div>`#${new Date().toISOString()}`</div>,
              description: 'It is an information toast.',
              type: 'info',
            });
          }}
        >
          Add Information Toast
        </TransparentButton>
        <TransparentButton
          onClick={() => {
            createToast({
              title: <div>`#${new Date().toISOString()}`</div>,
              description: 'It is a warning toast.',
              type: 'warning',
            });
          }}
        >
          Add Warning Toast
        </TransparentButton>
      </div>
      <Portal>
        <Toaster toaster={toaster} className={styles.toaster}>
          {(toast) => (
            <Toast
              key={toast.id}
              type={toast.type}
              toastTitle={toast.title}
              toastDescription={toast.description}
              dismiss={() => {
                toaster.dismiss(toast.id);
              }}
            />
          )}
        </Toaster>
      </Portal>
    </UISection>
  );
}

const styles = {
  toaster: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  }),
};
