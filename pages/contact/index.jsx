import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

const ContactPage = () => {
    return (
        <MainLayout>
            <div className='description' >
                <p>
                    ir a
                    <code className='code'><Link href='/'>Home</Link></code>
                </p>
            </div>
        </MainLayout>
    )
}

export default ContactPage