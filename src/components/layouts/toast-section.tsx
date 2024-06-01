import { createToaster, Portal, Toaster } from '@ark-ui/react';
import { css } from 'styled-system/css';
import { Toast } from '~/components/ark-ui/';
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

  return (
    <UISection>
      <UISectionHeading>Toast</UISectionHeading>
      <div>
        <TransparentButton
          onClick={() => {
            toaster.create({
              title: `#${new Date().toISOString()}`,
              description: 'It is a success toast.',
              type: 'success',
            });
          }}
        >
          Add Success Toast
        </TransparentButton>
        <TransparentButton
          onClick={() => {
            toaster.create({
              title: `#${new Date().toISOString()}`,
              description: 'It is an error toast.',
              type: 'error',
            });
          }}
        >
          Add Error Toast
        </TransparentButton>
        <TransparentButton
          onClick={() => {
            toaster.create({
              title: `#${new Date().toISOString()}`,
              description: 'It is an information toast.',
              type: 'info',
            });
          }}
        >
          Add Information Toast
        </TransparentButton>
        <TransparentButton
          onClick={() => {
            toaster.create({
              title: `#${new Date().toISOString()}`,
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
