export type DayValue = { day: string; value: number };
export type Campaign = {
  id: string;
  name: string;
  installs: DayValue[];
};

// import { api } from './client';

export const fetchCampaigns = async (): Promise<Campaign[]> => {
  // const { data } = await api.get<Campaign[]>('/campaigns');
  const data = [
    {
      id: '08a92372-9c8a-4649-b627-2e503b839c67',
      name: 'campaign 1',
      installs: [
        { day: 'monday', value: 45 },
        { day: 'tuesday', value: 56 },
        { day: 'wednesday', value: 22 },
        { day: 'thursday', value: 52 },
        { day: 'friday', value: 30 },
        { day: 'saturday', value: 32 },
        { day: 'sunday', value: 32 },
      ],
    },
    {
      id: 'edc6012f-4983-47dc-b1ce-b09dea89f847',
      name: 'campaign 2',
      installs: [
        { day: 'monday', value: 10 },
        { day: 'tuesday', value: 15 },
        { day: 'wednesday', value: 55 },
        { day: 'thursday', value: 78 },
        { day: 'friday', value: 45 },
        { day: 'saturday', value: 50 },
        { day: 'sunday', value: 20 },
      ],
    },
    {
      id: '79cfe6c8-f267-42eb-bc01-d93e0cc8315a',
      name: 'campaign 3',
      installs: [
        { day: 'monday', value: 45 },
        { day: 'tuesday', value: 65 },
        { day: 'wednesday', value: 54 },
        { day: 'thursday', value: 57 },
        { day: 'friday', value: 30 },
        { day: 'saturday', value: 40 },
        { day: 'sunday', value: 51 },
      ],
    },
    {
      id: '1427e2fb-36de-402c-a471-644ad67d2e8e',
      name: 'campaign 4',
      installs: [
        { day: 'monday', value: 10 },
        { day: 'tuesday', value: 5 },
        { day: 'wednesday', value: 13 },
        { day: 'thursday', value: 23 },
        { day: 'friday', value: 11 },
        { day: 'saturday', value: 8 },
        { day: 'sunday', value: 3 },
      ],
    },
  ];
  return data;
};
