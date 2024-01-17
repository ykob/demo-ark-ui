import { DatePickerSection, PageHeader } from '@/components/layouts';
import { css, cx } from 'styled-system/css';
import { container } from 'styled-system/patterns';

export default function App() {
  return (
    <div className={cx(container(), styles.container)}>
      <PageHeader />
      <DatePickerSection />
    </div>
  );
}

const styles = {
  container: css({
    display: 'flex',
    flexDir: 'column',
    gap: 10,
    py: 16,
  }),
};
