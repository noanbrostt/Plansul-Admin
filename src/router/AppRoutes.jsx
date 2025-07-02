import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '@/layout/DashboardLayout';
import LoginPage from '@/layout/LoginPage';

import HomePage from '@/modules/home/HomePage';
import UsersPage from '@/modules/users/UsersPage';

// Elementos UI
import ButtonsPage from '@/modules/elementos ui/ButtonsPage';
import InputsPage from '@/modules/elementos ui/InputsPage';
import BadgesPage from '@/modules/elementos ui/BadgesPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        {/* Elementos UI */}
        <Route path="/buttons" element={<ButtonsPage />} />
        <Route path="/badges" element={<BadgesPage />} />
        <Route path="/inputs" element={<InputsPage />} />
      </Route>


      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
