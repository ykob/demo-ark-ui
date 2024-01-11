import { CalendarDate } from "@internationalized/date";
import { css, cx } from "styled-system/css";
import { flex } from "styled-system/patterns";
import { DatePicker } from "./components";

function App() {
  return (
    <div>
      <h1>Demo for Ark UI</h1>
      <ul>
        <li>
          <a href="https://ark-ui.com/" target="_blank">
            Ark UI
          </a>
        </li>
      </ul>
      <section>
        <h2>DatePicker</h2>
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

export default App;
