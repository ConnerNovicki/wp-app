export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <p>Authed</p>
      {children}
    </section>
  );
}
