import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '@/layout/DashboardLayout';

import HomePage from '@/modules/home/HomePage';
// import UsersPage from '@/modules/users/UsersPage';
// import ReportsPage from '@/modules/reports/ReportsPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/users" element={<UsersPage />} /> */}
        {/* <Route path="/reports" element={<ReportsPage />} /> */}
      </Route>
    </Routes>
  );
}
