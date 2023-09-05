import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'

const ContactPage = () => {
    return (
        <>
            <div className='description' >
                <p>
                    ir a
                    <code className='code'><Link href='/'>Home</Link></code>
                </p>
            </div>
        </>
    )
}

ContactPage.getLayout = function getLayout(page){
 return (
     <MainLayout>
        <DarkLayout>
            {page}
        </DarkLayout>
     </MainLayout>
 )
}

export default ContactPage