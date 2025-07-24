import { FieldError, UseFormRegister } from 'react-hook-form';
import FormError from './FormError';

interface Props {
  register: UseFormRegister<any>;
  error?: FieldError;
}

const CampaignNameField = ({ register, error }: Props) => {
  return (
    <div className="mb-4">
      <label className="mb-1 block text-sm font-semibold text-ajtextdark">
        Name
      </label>
      <input
        type="text"
        {...register('name')}
        placeholder="Limited Offer"
        className="w-full rounded-lg border border-ajpurple300 bg-white px-3 py-2 text-sm text-ajtextdark placeholder-ajtextlight focus:border-ajpurple700 focus:ring-2 focus:ring-ajpurple500 focus:outline-none transition-colors shadow-sm"
      />
      <FormError message={error?.message} />
    </div>
  );
};

export default CampaignNameField;
