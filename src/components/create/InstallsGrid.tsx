import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { dayOrder as days, DayKey } from '../../data/constants';
import FormError from './FormError';

interface Props {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const InstallsGrid = ({ register, errors }: Props) => {
  return (
    <div>
      <p className="mb-2 text-sm font-medium">Installs per day</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {days.map((day) => (
          <div key={day}>
            <label className="mb-1 block text-xs font-medium capitalize">
              {day}
            </label>
            <input
              type="number"
              min={0}
              {...register(`installs.${day}`, { valueAsNumber: true })}
              className="w-full rounded border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FormError
              message={
                (errors.installs as any)?.[day as DayKey]?.message as
                  | string
                  | undefined
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstallsGrid;
