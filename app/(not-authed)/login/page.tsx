import LoginForm from './form';

export default function LoginPage() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem 2rem',
          maxWidth: '40rem',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <h1>Welcome</h1>
        <h3>Log in to your account</h3>
        <LoginForm />
      </div>
    </div>
  );
}
