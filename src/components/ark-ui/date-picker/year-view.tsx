import { DatePicker } from "@ark-ui/react";
import { DatePickerViewControl } from "./view-control";

export function DatePickerYearView() {
  return (
    <DatePicker.View view="year">
      {(api) => (
        <>
          <DatePickerViewControl />
          <DatePicker.Table>
            <DatePicker.TableBody>
              {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                <DatePicker.TableRow key={id}>
                  {years.map((year, id) => (
                    <DatePicker.TableCell key={id} value={year.value}>
                      <DatePicker.TableCellTrigger>
                        {year.label}
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
