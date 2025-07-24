export type DayValue = { day: string; value: number };
export type Campaign = {
  id: string;
  name: string;
  installs: DayValue[];
};

import { api } from './client';

export const fetchCampaigns = async (): Promise<Campaign[]> => {
  const { data } = await api.get<Campaign[]>('/campaigns');
  return data;
};
