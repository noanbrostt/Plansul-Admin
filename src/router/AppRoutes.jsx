import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '@/layout/DashboardLayout';

import HomePage from '@/modules/home/HomePage';
import UsersPage from '@/modules/users/UsersPage';

// Elementos UI
import ButtonsPage from '../modules/elementos ui/ButtonsPage';
import InputsPage from '../modules/elementos ui/InputsPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/buttons" element={<ButtonsPage />} />
        <Route path="/inputs" element={<InputsPage />} />
      </Route>
    </Routes>
  );
}
