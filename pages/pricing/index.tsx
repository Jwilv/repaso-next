
import Link from 'next/link'
import React from 'react'
import { MainLayout } from '../../components/layouts/MainLayout'
import { DarkLayout } from '../../components/layouts/DarkLayout'

const PricingPage = () => {
    return (
        <div className='description'>
            <p>
                ir a
                <code className='code'><Link href='/'>Home</Link></code>
            </p>
        </div>
    )
}
PricingPage.getLayout = (page : JSX.Element )=>{
    return(
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}

export default PricingPage