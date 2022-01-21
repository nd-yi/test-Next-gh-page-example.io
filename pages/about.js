import Link from 'next/link'
export default function About() {
  return (
    <div>
      <div>About us</div>
      <div>
        Back to{' '}
        <Link href="/" as={process.env.BACKEND_URL + '/'}>
          <a>Home000000000000000</a>
        </Link>
      </div>
    </div>
  )
}
