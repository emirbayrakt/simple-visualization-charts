import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import useCampaigns from '../hooks/useCampaigns';
import { dayOrder as days, DayKey } from '../data/constants';
import CampaignNameField from '../components/create/CampaignNameField';
import InstallsGrid from '../components/create/InstallsGrid';

export default function CreateCampaignPage() {
  const { campaigns, addCampaign } = useCampaigns();
  const navigate = useNavigate();

  const schema = useMemo(
    () =>
      z
        .object({
          name: z
            .string()
            .trim()
            .min(1, 'Name is required')
            .max(50, 'Too long'),
          installs: z.object(
            days.reduce(
              (acc, d) => ({
                ...acc,
                [d]: z.coerce
                  .number()
                  .min(0, '>= 0')
                  .max(999999999, '>= 999999999'),
              }),
              {} as Record<DayKey, z.ZodTypeAny>,
            ),
          ),
        })
        .refine(
          (v) =>
            !campaigns.some(
              (c) => c.name.toLowerCase() === v.name.toLowerCase(),
            ),
          { path: ['name'], message: 'Campaign with this name already exists' },
        ),
    [campaigns],
  );

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      installs: days.reduce(
        (acc, d) => ({ ...acc, [d]: 0 }),
        {} as Record<DayKey, number>,
      ),
    },
  });

  function onSubmit(values: FormValues) {
    const newCampaign = {
      id: crypto.randomUUID(),
      name: values.name.trim(),
      installs: days.map((d) => ({
        day: d,
        value: values.installs[d] as number,
      })),
    };
    addCampaign(newCampaign);
    reset();
    navigate('/campaigns');
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto px-2 sm:px-4 md:px-0">
      <h1 className="text-3xl font-bold text-ajpurple900">Create Campaign</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 rounded-xl border border-ajpurple300 bg-ajbglight p-6 shadow-sm"
      >
        <CampaignNameField register={register} error={errors.name} />
        <InstallsGrid register={register} errors={errors} />

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-lg bg-ajpurple900 px-6 py-2 text-sm font-semibold text-white hover:bg-ajpurple700 disabled:opacity-50 transition-colors shadow"
          >
            {isSubmitting ? 'Saving…' : 'Create Campaign'}
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg border border-ajpurple300 bg-white px-6 py-2 text-sm font-semibold text-ajpurple900 hover:bg-ajpurple300/30 transition-colors shadow"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
