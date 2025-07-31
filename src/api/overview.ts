export type DayValue = { day: string; value: number };
export type OverviewResponse = {
  installs: DayValue[];
  revenue: DayValue[];
};

// import { api } from './client';

export const fetchOverview = async (): Promise<OverviewResponse> => {
  // const { data } = await api.get<OverviewResponse>('/overview');
  const data = {
    installs: [
      { day: 'monday', value: 145 },
      { day: 'tuesday', value: 256 },
      { day: 'wednesday', value: 190 },
      { day: 'thursday', value: 204 },
      { day: 'friday', value: 120 },
      { day: 'saturday', value: 156 },
      { day: 'sunday', value: 135 },
    ],
    revenue: [
      { day: 'monday', value: 45.7 },
      { day: 'tuesday', value: 50.3 },
      { day: 'wednesday', value: 34.6 },
      { day: 'thursday', value: 54.8 },
      { day: 'friday', value: 67.4 },
      { day: 'saturday', value: 20.5 },
      { day: 'sunday', value: 43.8 },
    ],
  };
  return data;
};
