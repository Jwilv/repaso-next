import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <div className='description'>
        <p>
          ir a
          <code className='code'><Link href={'/about'}>About</Link></code>
        </p>
      </div>
    </MainLayout>
  )
}
