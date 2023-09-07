import Link from 'next/link'
import { FC } from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'
import { DarkLayout } from '../../components/layouts/DarkLayout'

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

ContactPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}

export default ContactPage