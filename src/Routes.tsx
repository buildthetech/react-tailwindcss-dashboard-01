import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import {
  AnalyticsView,
  ComponentsView,
  OverviewView,
  PageNotFoundView,
  SalesView,
} from "./views";

export default () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/dashboard" replace />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<OverviewView />} />
        <Route path="analytics" element={<AnalyticsView />} />
        <Route path="sales" element={<SalesView />} />
        <Route path="components" element={<ComponentsView />} />
        <Route path="*" element={<PageNotFoundView />} />
      </Route>
      <Route path="*" element={<PageNotFoundView />} />
    </Routes>
  );
};
