import { createToaster, Portal, Toaster } from '@ark-ui/react';
import { css } from 'styled-system/css';
import { Toast } from '~/components/ark-ui/';
import { UISection, UISectionHeading } from '~/components/common';

export function ToastSection() {
  const toaster = createToaster({
    placement: 'bottom-end',
    duration: 5000,
  });

  return (
    <UISection>
      <UISectionHeading>Toast</UISectionHeading>
      <div>
        <button
          onClick={() => {
            toaster.create({
              title: `#${Math.floor(Math.random() * 1000)}`,
              description: 'It is a description text.',
            });
          }}
        >
          Add Toast
        </button>
      </div>
      <Portal>
        <Toaster toaster={toaster} className={styles.toaster}>
          {(toast) => (
            <Toast
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
