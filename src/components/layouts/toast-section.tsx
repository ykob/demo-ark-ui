import { createToaster } from '@ark-ui/react';
import { UISection, UISectionHeading } from '~/components/common';
import { Toast } from '~/components/common/';

export function ToastSection() {
  const [Toaster, toast] = createToaster({
    placement: 'bottom-start',
    render(toast) {
      return (
        <Toast
          toastTitle={toast.title}
          toastDescription={toast.description}
          removeToast={toast.dismiss}
        />
      );
    },
  });

  return (
    <UISection>
      <UISectionHeading>Toast</UISectionHeading>
      <div>
        <button
          onClick={() => {
            toast.create({
              title: 'Hello World',
              description: 'It is a description text.',
            });
          }}
        >
          Add Toast
        </button>
      </div>
      <Toaster />
    </UISection>
  );
}
