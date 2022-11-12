export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <section>
      <h1>Not authed Page</h1>
      {children}
    </section>
  );
}
