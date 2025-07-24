export type DayValue = { day: string; value: number };
export type OverviewResponse = {
  installs: DayValue[];
  revenue: DayValue[];
};

import { api } from './client';

export const fetchOverview = async (): Promise<OverviewResponse> => {
  const { data } = await api.get<OverviewResponse>('/overview');
  return data;
};
