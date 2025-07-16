import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../features/Dashboard/Dashboard.tsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default AppRoutes;
