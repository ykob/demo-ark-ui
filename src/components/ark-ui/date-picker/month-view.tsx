import { DatePicker } from "@ark-ui/react";
import { DatePickerViewControl } from "./view-control";

export function DatePickerMonthView() {
  return (
    <DatePicker.View view="month">
      {(api) => (
        <>
          <DatePickerViewControl />
          <DatePicker.Table>
            <DatePicker.TableBody>
              {api
                .getMonthsGrid({ columns: 4, format: "short" })
                .map((months, id) => (
                  <DatePicker.TableRow key={id}>
                    {months.map((month, id) => (
                      <DatePicker.TableCell key={id} value={month.value}>
                        <DatePicker.TableCellTrigger>
                          {month.label}
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
  );
}
