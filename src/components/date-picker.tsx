import { DatePicker, type DatePickerProps, Portal } from "@ark-ui/react";
import { css, cx } from "styled-system/css";
import { InputField } from ".";

type ArkDatePickerProps = DatePickerProps & React.RefAttributes<HTMLDivElement>;

export const ArkDatePicker = ({ className, ...props }: ArkDatePickerProps) => {
  return (
    <DatePicker.Root className={cx(styles.wrap, className)} {...props}>
      <DatePicker.Control className={styles.controlWrap}>
        <DatePicker.Input asChild>
          <InputField />
        </DatePicker.Input>
        <DatePicker.Trigger>📅</DatePicker.Trigger>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="day">
              {(api) => (
                <>
                  <DatePicker.ViewControl>
                    <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger>
                      <DatePicker.RangeText />
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                  </DatePicker.ViewControl>
                  <DatePicker.Table>
                    <DatePicker.TableHead>
                      <DatePicker.TableRow>
                        {api.weekDays.map((weekDay, id) => (
                          <DatePicker.TableHeader key={id}>
                            {weekDay.short}
                          </DatePicker.TableHeader>
                        ))}
                      </DatePicker.TableRow>
                    </DatePicker.TableHead>
                    <DatePicker.TableBody>
                      {api.weeks.map((week, id) => (
                        <DatePicker.TableRow key={id}>
                          {week.map((day, id) => (
                            <DatePicker.TableCell key={id} value={day}>
                              <DatePicker.TableCellTrigger>
                                {day.day}
                              </DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                          ))}
                        </DatePicker.TableRow>
                      ))}
                    </DatePicker.TableBody>
                  </DatePicker.Table>
                </>
              )}
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  );
};

const styles = {
  wrap: css({
    height: "2em",
    position: "relative",
  }),
  controlWrap: css({
    display: "flex",
    gap: 2,
  }),
};
