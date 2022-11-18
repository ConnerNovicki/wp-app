import type { ReactNode } from 'react';
import DashboardLayout from '../../../components/layouts/dashboard-layout';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DashboardLayout>
      <div style={{ padding: 24, height: '100%', backgroundColor: 'blue' }}>
        {children}
      </div>
    </DashboardLayout>
  )
}