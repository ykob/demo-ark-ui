import { DatePicker } from '@ark-ui/react/date-picker';
import { TransparentButton } from '~/components/common';
import { viewStyles } from './styles';
import { DatePickerViewControl } from './view-control';

export function DatePickerMonthView() {
  return (
    <DatePicker.View view="month">
      {(api) => (
        <div className={viewStyles}>
          <DatePickerViewControl />
          <DatePicker.Table>
            <DatePicker.TableBody>
              {api
                .getMonthsGrid({ columns: 4, format: 'short' })
                .map((months, id) => (
                  <DatePicker.TableRow key={id}>
                    {months.map((month, id) => (
                      <DatePicker.TableCell key={id} value={month.value}>
                        <DatePicker.TableCellTrigger asChild>
                          <TransparentButton>{month.label}</TransparentButton>
                        </DatePicker.TableCellTrigger>
                      </DatePicker.TableCell>
                    ))}
                  </DatePicker.TableRow>
                ))}
            </DatePicker.TableBody>
          </DatePicker.Table>
        </div>
      )}
    </DatePicker.View>
  );
}
