import { DatePicker } from '@ark-ui/react';
import { DatePickerViewControl } from './view-control';

export function DatePickerDayView() {
  return (
    <DatePicker.View view="day">
      {(api) => (
        <>
          <DatePickerViewControl />
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
  );
}
