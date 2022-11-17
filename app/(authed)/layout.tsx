import AuthRoute from '../../components/route-guards/auth-route';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthRoute>
      <p>Authed</p>
      {children}
    </AuthRoute>
  );
}
