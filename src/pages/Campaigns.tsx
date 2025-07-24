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
    <div className="space-y-6 max-w-2xl mx-auto px-2 sm:px-4 md:px-0">
      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-ajpurple900">Campaigns</h1>

        <select
          className="rounded-lg border border-ajpurple300 bg-white px-4 py-2 text-sm font-semibold text-ajpurple900 focus:border-ajpurple700 focus:ring-2 focus:ring-ajpurple500 focus:outline-none transition-colors shadow-sm"
          value={current.id}
          onChange={(e) => selectCampaign(e.target.value)}
        >
          {campaigns.map((c) => (
            <option key={c.id} value={c.id} className="text-ajtextdark">
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="h-80 rounded-xl border border-ajpurple300 bg-ajbglight p-4 shadow-sm">
        <h2 className="mb-2 text-sm font-semibold text-ajtextdark">
          Installs for “{current.name}”
        </h2>
        <LineChart
          labels={labels}
          data={installs}
          label="Installs"
          color="#635dff"
        />
      </div>
    </div>
  );
};

export default CampaignsPage;
