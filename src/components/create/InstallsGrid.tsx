import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { dayOrder as days, DayKey } from '../../data/constants';
import FormError from './FormError';

interface Props {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const InstallsGrid = ({ register, errors }: Props) => {
  return (
    <div className="mb-4">
      <p className="mb-2 text-sm font-semibold text-ajtextdark">
        Installs per day
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {days.map((day) => (
          <div key={day} className="flex flex-col">
            <label className="mb-1 block text-xs font-semibold capitalize text-ajtextdark">
              {day}
            </label>
            <input
              type="number"
              min={0}
              {...register(`installs.${day}`, { valueAsNumber: true })}
              className="w-full rounded-lg border border-ajpurple300 bg-white px-2 py-1.5 text-sm text-ajtextdark placeholder-ajtextlight focus:border-ajpurple700 focus:ring-2 focus:ring-ajpurple500 focus:outline-none transition-colors shadow-sm"
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
