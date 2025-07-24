import LineChart from '../components/LineChart';
import Loading from '../components/Loading';
import useOverview from '../hooks/useOverview';

const Overview = () => {
  const { data, loading, error, refetch } = useOverview();

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="text-red-600">
        {error}{' '}
        <button onClick={refetch} className="underline">
          Retry
        </button>
      </div>
    );
  }

  if (!data) return null;

  const order = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  const labels = order.map((d) => d[0].toUpperCase() + d.slice(1));

  const installsValues = order.map(
    (day) => data.installs.find((d) => d.day === day)?.value ?? 0,
  );
  const revenueValues = order.map(
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
