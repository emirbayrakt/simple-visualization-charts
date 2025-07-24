import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Overview from './pages/Overview';
import Campaigns from './pages/Campaigns';
import Create from './pages/Create';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/create" element={<Create />} />
      </Route>
    </Routes>
  );
};

export default App;
