import { FieldError, UseFormRegister } from 'react-hook-form';
import FormError from './FormError';

interface Props {
  register: UseFormRegister<any>;
  error?: FieldError;
}

const CampaignNameField = ({ register, error }: Props) => {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">Name</label>
      <input
        type="text"
        {...register('name')}
        placeholder="Limited Offer"
        className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <FormError message={error?.message} />
    </div>
  );
};

export default CampaignNameField;
