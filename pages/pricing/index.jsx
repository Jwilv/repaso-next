import { DarkLayout } from '@/components/layouts/DarkLayout'
import { MainLayout } from '@/components/layouts/MainLayout'
import Link from 'next/link'
import React from 'react'

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
PricingPage.getLayout = (page)=>{
    return(
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}

export default PricingPage