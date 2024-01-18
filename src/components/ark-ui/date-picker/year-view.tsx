import { DatePicker } from '@ark-ui/react';
import { TransparentButton } from '~/components/common';
import { viewStyles } from './styles';
import { DatePickerViewControl } from './view-control';

export function DatePickerYearView() {
  return (
    <DatePicker.View view="year">
      {(api) => (
        <div className={viewStyles}>
          <DatePickerViewControl />
          <DatePicker.Table>
            <DatePicker.TableBody>
              {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                <DatePicker.TableRow key={id}>
                  {years.map((year, id) => (
                    <DatePicker.TableCell key={id} value={year.value}>
                      <DatePicker.TableCellTrigger asChild>
                        <TransparentButton>{year.label}</TransparentButton>
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
