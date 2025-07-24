import BarChart from '../components/BarChart';
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
  console.log(data);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Overview</h1>

      <div className="h-80 rounded-md border border-gray-200 bg-white p-4">
        <BarChart />
      </div>
    </div>
  );
};

export default Overview;
