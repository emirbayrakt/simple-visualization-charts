import { fetchOverview } from '../api/overview';
import LineChart from '../components/LineChart';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { dayOrder } from '../data/constants';
import useFetch from '../hooks/useFetch';

const Overview = () => {
  const { data, loading, error, refetch } = useFetch(fetchOverview);

  if (loading) return <Loading />;

  if (error) {
    return <ErrorMessage error={error} onRetry={refetch} />;
  }

  if (!data) return <div>No data.</div>;

  const labels = dayOrder.map((d) => d[0].toUpperCase() + d.slice(1));

  const installsValues = dayOrder.map(
    (day) => data.installs.find((d) => d.day === day)?.value ?? 0,
  );
  const revenueValues = dayOrder.map(
    (day) => data.revenue.find((d) => d.day === day)?.value ?? 0,
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Overview</h1>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1 h-80 rounded-md border border-gray-200 bg-white p-4">
          <h2 className="mb-2 text-sm font-medium text-gray-600">Installs</h2>
          <LineChart
            labels={labels}
            data={installsValues}
            label="Installs"
            color="#172450"
          />
        </div>

        <div className="flex-1 h-80 rounded-md border border-gray-200 bg-white p-4">
          <h2 className="mb-2 text-sm font-medium text-gray-600">Revenue</h2>
          <LineChart
            labels={labels}
            data={revenueValues}
            label="Revenue"
            color="#8a81f3"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
