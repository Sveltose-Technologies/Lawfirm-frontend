// FILE: pages/register.js
import Link from 'next/link';

export default function Register() {
  return (
    <div className="container text-center py-5">
      <h1>Register for Event</h1>
      <p>Registration form coming soon.</p>
      <Link href="/events"><a className="btn btn-primary">Back to Events</a></Link>
    </div>
  );
}