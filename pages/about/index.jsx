import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'


const AboutPage = () => {
  return (
    <MainLayout>
      <div className='description'>
        <p>
          ir a
          <code className='code'><Link href='/'>Home</Link></code>
        </p>
      </div>
    </MainLayout>
  )
}

export default AboutPage