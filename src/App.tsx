import { CalendarDate } from "@internationalized/date";
import { css, cx } from "styled-system/css";
import { container, flex } from "styled-system/patterns";
import { DatePicker, SectionHeading } from "./components";

export default function App() {
  return (
    <div className={cx(container(), styles.container)}>
      <header>
        <h1 className={styles.heading}>Demo for Ark UI</h1>
        <ul>
          <li>
            <a href="https://ark-ui.com/" target="_blank">
              Ark UI
            </a>
          </li>
        </ul>
      </header>
      <section>
        <SectionHeading>DatePicker</SectionHeading>
        <div className={cx(css({ flex: 1, gap: 4 }), flex())}>
          <DatePicker locale="ja-JP" />
          <DatePicker locale="ja-JP" defaultValue={["2024-01-10"]} />
          <DatePicker
            locale="ja-JP"
            min={new CalendarDate(2020, 1, 1)}
            max={new CalendarDate(2030, 1, 1)}
          />
          <DatePicker />
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: css({
    display: "flex",
    flexDir: "column",
    gap: 6,
    py: 12,
  }),
  heading: css({
    fontSize: "4xl",
  }),
};
