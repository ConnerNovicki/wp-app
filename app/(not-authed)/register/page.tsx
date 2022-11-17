import RegisterForm from './form';

export default function RegisterPage() {
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
        <h3>Make an account</h3>
        <RegisterForm />
      </div>
    </div>
  )
}