import LineChart from '../components/LineChart';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { dayOrder } from '../data/constants';
import useCampaigns from '../hooks/useCampaigns';

const CampaignsPage = () => {
  const { campaigns, loading, error, selectedId, selectCampaign, refetch } =
    useCampaigns();

  if (loading) return <Loading />;

  if (error) {
    return <ErrorMessage error={error} onRetry={refetch} />;
  }

  if (!campaigns.length) return <div>No campaigns.</div>;

  const current = campaigns.find((c) => c.id === selectedId) || campaigns[0];
  const labels = dayOrder.map((d) => d[0].toUpperCase() + d.slice(1));
  const installs = dayOrder.map(
    (d) => current.installs.find((x) => x.day === d)?.value ?? 0,
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Campaigns</h1>

        <select
          className="rounded border border-gray-300 bg-white px-3 py-2 text-sm"
          value={current.id}
          onChange={(e) => selectCampaign(e.target.value)}
        >
          {campaigns.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="h-80 rounded-md border border-gray-200 bg-white p-4">
        <h2 className="mb-2 text-sm font-medium text-gray-600">
          Installs for “{current.name}”
        </h2>
        <LineChart
          labels={labels}
          data={installs}
          label="Installs"
          color="#6366f1"
        />
      </div>
    </div>
  );
};

export default CampaignsPage;
