import { DatePicker } from "@ark-ui/react";
import { InputField } from "@/components/common";
import { css } from "styled-system/css";

export function DatePickerControl() {
  return (
    <DatePicker.Control className={styles.wrap}>
      <DatePicker.Input asChild>
        <InputField />
      </DatePicker.Input>
      <DatePicker.Trigger>📅</DatePicker.Trigger>
    </DatePicker.Control>
  );
}

const styles = {
  wrap: css({
    display: "flex",
    gap: 2,
  }),
};
