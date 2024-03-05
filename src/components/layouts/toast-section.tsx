import { createToaster } from '@ark-ui/react';
import { UISection, UISectionHeading } from '~/components/common';
import { Toast } from '~/components/common/';

export function ToastSection() {
  const [Toaster, toast] = createToaster({
    placement: 'bottom-end',
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
              title: `#${Math.floor(Math.random() * 1000)}`,
              description: 'It is a description text.',
              render: (toast) => (
                <Toast
                  toastTitle={toast.title}
                  toastDescription={toast.description}
                  removeToast={toast.dismiss}
                />
              ),
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
